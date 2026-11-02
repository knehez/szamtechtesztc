import { Component, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { codeQuestions_0 } from "./codeQuestions_0";
import { codeQuestions_1 } from "./codeQuestions_1";
import { codeQuestions_2 } from "./codeQuestions_2";
import { codeQuestions_3 } from "./codeQuestions_3";
import { codeQuestions_4 } from "./codeQuestions_4";
import { codeQuestions_5 } from "./codeQuestions_5";
import { codeQuestions_6 } from "./codeQuestions_6";
import { codeQuestions_7 } from "./codeQuestions_7";
import { codeQuestions_8 } from "./codeQuestions_8";
import { codeQuestions_9 } from "./codeQuestions_9";
import { codeQuestions_10 } from "./codeQuestions_10";
import { CompilerService } from "./codecompile.service";
import "brace/index";
import "brace/mode/c_cpp.js";
import "brace/theme/eclipse.js";
import "brace/ext/language_tools.js";
import "brace/snippets/c_cpp.js";
import "brace/snippets/text.js";

import { ConfirmationService } from "primeng/api";

export interface IContext {
  data: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnDestroy {
  userName = "";
  testStarted: Boolean = false;
  questionsInTest = 0;
  correctAnswers = 0;
  testFinished = false;
  currentQuestionIndex = 0;
  currentCorrectAnswer = -1;
  currentCode = "";
  currentAnswers = [];
  timerStream;
  countdown = 0;
  randomQuestions = [];
  codeInput: any;
  compilerOutput = "";
  endResult = "";
  readonly maxRetriesPerQuestion = 2;
  remainingRetries = 0;
  isCompiling = false;
  dialogOpen = false;
  questionClosed = true;
  private deadline = 0;
  private requestId = 0;
  private requests = new Subscription();
  private destroyed = false;

  get canRun(): boolean {
    return this.testStarted && !this.testFinished && !this.questionClosed &&
      !this.isCompiling && !this.dialogOpen;
  }

  constructor(
    private compilerService: CompilerService,
    private confirmationService: ConfirmationService
  ) {}

  get result(): string {
    return (
      (this.testFinished ? "Végeredmény: " : "Részeredmény: ") +
      this.correctAnswers +
      "/" +
      this.questionsInTest +
      " (" +
      (this.questionsInTest ? (this.correctAnswers * 100 / this.questionsInTest) : 0).toFixed(1) +
      "%)"
    );
  }

  public startTest() {
    if (this.testStarted) {
      this.showDialog(
        "A teszt már elindult, nem lehet újra indítani. </br> Újrakezdéshez frissítse a lapot.",
        () => {}
      );
      return;
    }
    this.testStarted = true;
    // collect questions
    const codeQuestions = [];
    codeQuestions.push(...codeQuestions_0);
    codeQuestions.push(...codeQuestions_1);
    codeQuestions.push(...codeQuestions_2);
    codeQuestions.push(...codeQuestions_3);
    codeQuestions.push(...codeQuestions_4);
    codeQuestions.push(...codeQuestions_5);
    codeQuestions.push(...codeQuestions_6);
    codeQuestions.push(...codeQuestions_7);
    codeQuestions.push(...codeQuestions_8);
    codeQuestions.push(...codeQuestions_9);
    codeQuestions.push(...codeQuestions_10);
    // gyors tesztelési célból a level = -1 kérdést kérdezzük először
    const quickTestQuestion = codeQuestions.filter((o) => o.level === -1);
    if (quickTestQuestion.length === 1) {
      this.randomQuestions.push(...quickTestQuestion);
    }
    // véletlenszerűen kivesszük az összes kérdést
    // this.randomQuestions.push(...testQuestions.sort(() => .5 - Math.random()));
    // az első kettőt meghagyjuk a többit levágjuk
    // this.randomQuestions = this.randomQuestions.slice(0, 2);
    const maxLevel = Math.max.apply(
      Math,
      codeQuestions.map(function (o) {
        return o.level;
      })
    );
    // A 0. és 1. szintből 3, a többi szintből 2 kérdést választunk.
    for (let i = 0; i <= maxLevel; i++) {
      // egyes szintekhez tartozó feladatokat sorba rendezzük és 2-t kiválasztunk belőlük
      this.randomQuestions.push(
        ...this.shuffleQuestions(codeQuestions.filter((o) => o.level === i))
          .map((question) => ({ ...question }))
          .slice(0, i==1 || i == 0 ? 3:2) // az 1-es és 0. szintből 3-at választ
      );
    }
    for (const q of this.randomQuestions) {
      if (q.initialCode) {
        q.initialCode = q.initialCode.replace(/\t/g, "    ");
      }
    }
    // this.randomQuestions.push(...codeQuestions.sort(() => .5 - Math.random()));

    this.questionsInTest = this.randomQuestions.length;
    this.currentQuestionIndex = 0;
    this.setUpNextQuestion();
    this.startCountdownTimer();
  }

  stopTimer() {
    if (this.timerStream) {
      this.timerStream.unsubscribe();
      this.timerStream = null;
    }
  }

  startCountdownTimer() {
    this.stopTimer();
    const time = this.randomQuestions[this.currentQuestionIndex].time ?? 60;
    this.deadline = Date.now() + time * 1000;
    this.countdown = time * 1000;
    this.endResult = this.result;
    this.timerStream = interval(1000).subscribe(() => this.tickerFunc());
  }

  private cancelRequests() {
    this.requestId++;
    this.requests.unsubscribe();
    this.requests = new Subscription();
    this.isCompiling = false;
  }

  private receiveResponse(questionIndex: number, requestId: number): boolean {
    if (this.destroyed || this.questionClosed || this.testFinished ||
        questionIndex !== this.currentQuestionIndex || requestId !== this.requestId) {
      return false;
    }
    this.tickerFunc();
    return !this.questionClosed;
  }

  checkTestSolution() {
    if (!this.canRun) { return; }
    this.tickerFunc();
    if (this.questionClosed) { return; }
    const questionIndex = this.currentQuestionIndex;
    const requestId = ++this.requestId;
    const question = this.randomQuestions[questionIndex];
    this.isCompiling = true;
    this.requests.add(this.compilerService.compileCode({
      source: question.testCode + "\n" + this.codeInput, stdin: question.stdin
    }).subscribe((res) => {
      if (!this.receiveResponse(questionIndex, requestId)) { return; }
      this.isCompiling = false;
      const stderr = String(res?.stderr ?? "").replace(/^.*(\.c|\.h):/gm, "[source]");
      this.compilerOutput = "Compiler output:\n" + stderr +
        "\nExecutable output:\n" + String(res?.stdout ?? "");
    }, () => {
      if (!this.receiveResponse(questionIndex, requestId)) { return; }
      this.isCompiling = false;
      this.compilerOutput = "A fordítószolgáltatás nem érhető el. Próbálja újra.";
    }));
  }

  checkCodeSolution() {
    if (!this.canRun) { return; }
    this.tickerFunc();
    if (this.questionClosed) { return; }
    this.compilerOutput = "";
    const questionIndex = this.currentQuestionIndex;
    const requestId = ++this.requestId;
    const question = this.randomQuestions[questionIndex];
    const source = question.testCode + "\n" + this.codeInput;
    const testCases = [{ stdin: question.stdin, result: question.result },
      ...(question.testCases ?? [])];
    this.isCompiling = true;
    const runCase = (index: number) => {
      this.requests.add(this.compilerService.compileCode({
        source, stdin: testCases[index].stdin
      }).subscribe((solution) => {
        if (!this.receiveResponse(questionIndex, requestId)) { return; }
        const expected = testCases[index].result;
        const isCorrect = solution != null &&
          String(solution.stdout ?? "").replace(/\r/g, "") === expected.stdout.replace(/\r/g, "") &&
          String(solution.stderr ?? "") === expected.stderr &&
          solution.exitCode !== undefined && solution.exitCode !== null &&
          Number(solution.exitCode) === expected.exitCode;
        if (isCorrect && index + 1 < testCases.length) {
          runCase(index + 1);
          return;
        }
        this.isCompiling = false;
        if (isCorrect) {
          this.correctAnswers++;
          this.finishQuestion("A válasza helyes");
        } else if (this.remainingRetries > 0) {
          this.remainingRetries--;
          this.showDialog("A válasza helytelen. Hátralévő próbálkozások: " +
            this.remainingRetries, () => {});
        } else {
          this.finishQuestion("A válasza helytelen");
        }
      }, () => {
        if (!this.receiveResponse(questionIndex, requestId)) { return; }
        this.isCompiling = false;
        this.compilerOutput = "A fordítószolgáltatás nem érhető el. Próbálja újra.";
      }));
    };
    runCase(0);
  }

  private finishQuestion(message: string) {
    if (this.questionClosed) { return; }
    this.questionClosed = true;
    this.stopTimer();
    this.cancelRequests();
    this.endResult = this.result;
    this.showDialog(message, () => this.goNextQuestion());
  }

  goNextQuestion() {
    if (!this.questionClosed || this.testFinished || this.destroyed) { return; }
    this.stopTimer();
    this.cancelRequests();
    if (this.currentQuestionIndex < this.questionsInTest - 1) {
      this.currentQuestionIndex++;
      this.setUpNextQuestion();
      this.startCountdownTimer();
    } else {
      this.testFinished = true;
      this.endResult = this.result;
      this.showDialog("Vége a tesztnek", () => {});
    }
  }

  setUpNextQuestion() {
    const currentQuestion = this.randomQuestions[this.currentQuestionIndex];
    this.currentAnswers = [];
    this.questionClosed = false;
    this.compilerOutput = "";
    this.codeInput = "";
    this.remainingRetries = this.maxRetriesPerQuestion;
    // egyszerű feleltválasztós teszt

    if (currentQuestion.initialCode !== undefined) {
      // Ha van a kérdésben kódrészlet, akkor formázni kell:
      //
      // megnézzük hány üres karakter van a második sor előtt?
      // amennyi van annyit veszünk el minden sor elejéből
      //
      this.codeInput = this.removeWhiteCharsFromLineStarts(
        currentQuestion.initialCode
      );
    }
    currentQuestion.question = this.removeWhiteCharsFromLineStarts(
      currentQuestion.question
    );
  }

  removeWhiteCharsFromLineStarts(str: string): string {
    const lines = str.replace(/\r/g, "").split("\n");
    while (lines.length && !lines[0].trim()) { lines.shift(); }
    while (lines.length && !lines[lines.length - 1].trim()) { lines.pop(); }
    const firstLineHasNoIndent = lines.length > 0 && lines[0].search(/\S/) === 0;
    const body = firstLineHasNoIndent ? lines.slice(1) : lines;
    const indentedLines = body.filter((line) => line.trim());
    const indent = indentedLines.length
      ? Math.min(...indentedLines.map((line) => line.search(/\S/))) : 0;
    const formatted = body.map((line) => line.slice(indent));
    return (firstLineHasNoIndent ? [lines[0], ...formatted] : formatted).join("\n");
  }

  private shuffleQuestions<T>(questions: T[]): T[] {
    const shuffled = questions.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  tickerFunc() {
    if (this.questionClosed || this.testFinished || this.destroyed) { return; }
    this.countdown = Math.max(0, Math.ceil((this.deadline - Date.now()) / 1000) * 1000);
    this.endResult = this.result;
    if (this.countdown === 0) {
      this.finishQuestion("Lejárt az idő, a válasza helytelen");
    }
  }

  ngOnDestroy() {
    this.destroyed = true;
    this.stopTimer();
    this.cancelRequests();
    this.confirmationService.close();
  }

  showDialog(title: string, callbackFunction: () => void) {
    this.dialogOpen = true;
    const questionIndex = this.currentQuestionIndex;
    const requestId = this.requestId;
    let accepted = false;
    this.confirmationService.confirm({
      message: title,
      accept: () => {
        if (accepted || this.destroyed || questionIndex !== this.currentQuestionIndex ||
            requestId !== this.requestId) { return; }
        accepted = true;
        this.dialogOpen = false;
        callbackFunction();
      },
    });
  }
}
