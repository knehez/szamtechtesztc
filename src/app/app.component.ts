import { Component, ViewChild } from "@angular/core";
import { interval, timer } from "rxjs";
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
export class AppComponent {
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
      ((this.correctAnswers * 100) / this.questionsInTest).toPrecision(2) +
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
    // minden szintből 1-et választunk véletlenszerűen
    for (let i = 0; i <= maxLevel; i++) {
      // egyes szintekhez tartozó feladatokat sorba rendezzük és 2-t kiválasztunk belőlük
      this.randomQuestions.push(
        ...codeQuestions
          .filter((o) => o.level === i)
          .sort(() => 0.5 - Math.random())
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
    const timer_ = interval(1000);
    this.timerStream = timer_.subscribe((t) => this.tickerFunc(t));
  }

  checkTestSolution() {
    const stdin = this.randomQuestions[this.currentQuestionIndex].stdin;
    const testCode = this.randomQuestions[this.currentQuestionIndex].testCode;
    const code = { source: testCode + "\n" + this.codeInput, stdin: stdin };
    this.compilerService.compileCode(code).subscribe((res) => {
      let compilerOutput = res["stderr"]
        .replace(/^.*(\.c|.h):/gm, "[source]")
        .replace(/(\r\n|\n)/g, "<br />");
        
        compilerOutput = "Compiler output:<br/>" + compilerOutput;

        // show executable program's output
        let executableOutput = res["stdout"]
        .replace(/^.*(\.c|.h):/gm, "[source]")
        .replace(/(\r\n|\n)/g, "<br />");

        this.compilerOutput = compilerOutput + "<br/>Executable output: </br>" + executableOutput;
    });
  }

  checkCodeSolution() {
    this.compilerOutput = "";
    const stdin = this.randomQuestions[this.currentQuestionIndex].stdin;
    const userSolution = this.randomQuestions[this.currentQuestionIndex].result;
    const testCode = this.randomQuestions[this.currentQuestionIndex].testCode;

    const code = { source: testCode + "\n" + this.codeInput, stdin: stdin };
    console.log(code);
    this.compilerService.compileCode(code).subscribe(
      (solution) => {
        const normalizedStdout =
          solution && solution.stdout
            ? solution.stdout.replace(/(\r)/g, "")
            : "";
        const normalizedStderr =
          solution && typeof solution.stderr === "string"
            ? solution.stderr
            : solution && solution.stderr !== undefined && solution.stderr !== null
            ? String(solution.stderr)
            : "";
        const normalizedExitCode =
          solution && typeof solution.exitCode === "number"
            ? solution.exitCode
            : solution && solution.exitCode !== undefined && solution.exitCode !== null
            ? Number(solution.exitCode)
            : undefined;

        solution.stdout = normalizedStdout;
        solution.stderr = normalizedStderr;
        solution.exitCode = normalizedExitCode;

        const isCorrect =
          solution.stderr === userSolution.stderr &&
          solution.stdout === userSolution.stdout &&
          solution.exitCode === userSolution.exitCode;

        if (isCorrect) {
          this.correctAnswers++;
          this.stopTimer();
          this.showDialog("A válasza helyes", () => {
            this.goNextQuestion();
          });
        } else if (this.remainingRetries > 0) {
          this.remainingRetries--;
          const attemptsLeft = this.remainingRetries;
          this.showDialog(
            "A válasza helytelen. Hátralévő próbálkozások: " + attemptsLeft,
            () => {}
          );
        } else {
          this.stopTimer();
          this.showDialog("A válasza helytelen", () => {
            this.goNextQuestion();
          });
        }
      },
      (err) => {
        this.showDialog(err, () => {});
      }
    );
  }

  goNextQuestion() {
    if (this.currentQuestionIndex < this.questionsInTest - 1) {
      this.codeInput = "";
      this.currentQuestionIndex++;
      this.setUpNextQuestion();
      this.startCountdownTimer();
    } else {
      this.testFinished = true;
      this.showDialog("Vége a tesztnek", () => {});
      const timer_ = interval(1000);
      this.timerStream = timer_.subscribe((t) =>
        this.tickerFuncProtectResult(t)
      );
    }
  }

  setUpNextQuestion() {
    const currentQuestion = this.randomQuestions[this.currentQuestionIndex];
    this.currentAnswers = [];
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
    const tmp = str;
    const splittedStr = tmp.split("\n");
    if (splittedStr.length === 1) {
      return str;
    }
    const numberOfWhiteSpaces = splittedStr[1].search(/\S/);
    return (
      splittedStr[0] +
      splittedStr
        .slice(1)
        .map((t) => t.substring(numberOfWhiteSpaces))
        .join("\n")
        .trim()
    );
  }

  getRandomQuestionIndices(maxIndex) {
    const questionIndices = [];
    for (let i = 0; i < maxIndex; i++) {
      questionIndices.push(i);
    }
    return questionIndices.sort(() => 0.5 - Math.random());
  }

  randomSpaces() {
    const n = Math.floor(Math.random() * 10 + 1);
    let ret = "";
    for (let i = 0; i < n; i++) {
      ret += " ";
    }
    return ret;
  }

  tickerFuncProtectResult(t) {
    this.endResult = this.result + this.randomSpaces();
  }

  tickerFunc(t) {
    this.endResult = this.result + this.randomSpaces();
    // 60 m�sodperct�l sz�mol vissza
    const time =
      this.randomQuestions[this.currentQuestionIndex].time === undefined
        ? 60
        : this.randomQuestions[this.currentQuestionIndex].time;
    this.countdown = time * 1000 - t * 1000;
    if (this.countdown <= 0) {
      this.countdown = 0;
      this.stopTimer();
      this.showDialog('Lejárt az idő, a válasza helytelen', () => {
        this.goNextQuestion();
      });
      return;
    }
  }

  showDialog(title: string, callbackFunction: any) {
    this.confirmationService.confirm({
      message: title,
      accept: () => {
        callbackFunction();
      },
    });
  }
}
