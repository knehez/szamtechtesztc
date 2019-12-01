import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import { codeQuestions_1 } from './codeQuestions_1';
import { codeQuestions_2 } from './codeQuestions_2';
import { codeQuestions_3 } from './codeQuestions_3';
import { codeQuestions_4 } from './codeQuestions_4';
import { codeQuestions_5 } from './codeQuestions_5';
import { codeQuestions_6 } from './codeQuestions_6';
import { codeQuestions_7 } from './codeQuestions_7';
import { codeQuestions_8 } from './codeQuestions_8';
import { codeQuestions_9 } from './codeQuestions_9';
import { codeQuestions_10 } from './codeQuestions_10';
import { CompilerService } from './codecompile.service';
import 'brace/index';
import 'brace/mode/c_cpp.js';
import 'brace/theme/eclipse.js';
import 'brace/ext/language_tools.js';
import 'brace/snippets/c_cpp.js';
import 'brace/snippets/text.js';
import { ModalTemplate, SuiModalService, TemplateModalConfig } from 'ng2-semantic-ui';

export interface IContext {
  data: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  testStarted: Boolean = false;
  questionsInTest = 0;
  correctAnswers = 0;
  testFinished = false;
  currentQuestionIndex = 0;
  currentCorrectAnswer = -1;
  currentCode = '';
  currentAnswers = [];
  timerStream;
  countdown = 0;
  randomQuestions = [];
  codeInput: any;
  compilerOutput = '';
  endResult = '';
  @ViewChild('modalTemplate', { static: true })
  public modalTemplate: ModalTemplate<IContext, string, string>;

  constructor(private compilerService: CompilerService, private modalService: SuiModalService) { }

  get result(): string {
    return (this.testFinished ? 'Végeredmény: ' : 'Részeredmény: ') + this.correctAnswers + '/' + this.questionsInTest +
      ' (' + (this.correctAnswers * 100 / this.questionsInTest).toPrecision(2) + '%)';
  }

  public startTest() {
    if (this.testStarted) {
      this.showDialog('A teszt már elindult, nem lehet újra indítani. </br> Újrakezdéshez frissítse a lapot.', () => { });
      return;
    }
    this.testStarted = true;
    // collect questions
    const codeQuestions = [];
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
    const quickTestQuestion = codeQuestions.filter(o => o.level === -1);
    if (quickTestQuestion.length === 1) {
      this.randomQuestions.push(...quickTestQuestion);
    }
    // véletlenszerűen kivesszük az összes kérdést
    // this.randomQuestions.push(...testQuestions.sort(() => .5 - Math.random()));
    // az első kettőt meghagyjuk a többit levágjuk
    // this.randomQuestions = this.randomQuestions.slice(0, 2);
    const maxLevel = Math.max.apply(Math, codeQuestions.map(function (o) { return o.level; }));
    // minden szintből 1-et választunk véletlenszerűen
    for (let i = 1; i <= maxLevel; i++) {
      // egyes szintekhez tartozó feladatokat sorba rendezzük és 1-et kiválasztunk belőlük
      this.randomQuestions.push(...codeQuestions.filter(o => o.level === i).sort(() => .5 - Math.random()).slice(0, 1));
    }
    for (const q of this.randomQuestions) {
      if (q.initialCode) {
        q.initialCode = q.initialCode.replace(/\t/g, '    ');
      }
    }
    // this.randomQuestions.push(...codeQuestions.sort(() => .5 - Math.random()));

    this.questionsInTest = this.randomQuestions.length;
    this.currentQuestionIndex = 0;
    this.setUpNextQuestion();
    this.startCountdownTimer();
  }

  startCountdownTimer() {
    const timer = Observable.timer(0, 1000);
    this.timerStream = timer.subscribe(t => this.tickerFunc(t));
  }

  checkTestSolution() {
    const stdin = this.randomQuestions[this.currentQuestionIndex].stdin;
    const testCode = this.randomQuestions[this.currentQuestionIndex].testCode;
    const code = { source: this.codeInput + '\n' + testCode, stdin: stdin };
    this.compilerService.compileCode(code).then((res) => {
      this.compilerOutput = JSON.stringify(res['stderr']).
        replace(/(\\r\\n)|(\\n)/g, '\n').replace(/^.*(\.c|.h):/gm, '[source]').replace(/(\\r\\n|\n)/g, '<br \/>');
    });
  }

  checkCodeSolution() {
    this.timerStream.unsubscribe();
    this.compilerOutput = '';
    const stdin = this.randomQuestions[this.currentQuestionIndex].stdin;
    const userSolution = this.randomQuestions[this.currentQuestionIndex].result;
    const testCode = this.randomQuestions[this.currentQuestionIndex].testCode;

    const code = { source: this.codeInput + '\n' + testCode, stdin: stdin };
    this.compilerService.compileCode(code).then((solution: any) => {
      // solution is OK whether these 3 properties are equuals
      // sample solution from the backend: { 'stderr': '', 'stdout': 'xxxx', 'exitCode': 0 },
      if (solution.stderr === userSolution.stderr &&
        solution.stdout === userSolution.stdout &&
        solution.exitCode === userSolution.exitCode) {
        this.showDialog('A válasza helyes', () => { this.goNextQuestion(); });
        this.correctAnswers++;
      } else {
        this.showDialog('A válasza helytelen', () => { this.goNextQuestion(); });
      }
    }, (err) => {
      this.showDialog(err, () => { });
    });
  }

  goNextQuestion() {
    if (this.currentQuestionIndex < this.questionsInTest - 1) {
      this.codeInput = '';
      this.currentQuestionIndex++;
      this.setUpNextQuestion();
      this.startCountdownTimer();
    } else {
      this.testFinished = true;
      this.showDialog('Vége a tesztnek', () => { });
      const timer = Observable.timer(0, 1000);
      this.timerStream = timer.subscribe(t => this.tickerFuncProtectResult(t));
    }
  }

  setUpNextQuestion() {
    const currentQuestion = this.randomQuestions[this.currentQuestionIndex];
    this.currentAnswers = [];
    // egyszerű feleltválasztós teszt

    if (currentQuestion.initialCode !== undefined) {
      // Ha van a kérdésben kódrészlet, akkor formázni kell:
      //
      // megnézzük hány üres karakter van a második sor előtt?
      // amennyi van annyit veszünk el minden sor elejéből
      //
      this.codeInput = this.removeWhiteCharsFromLineStarts(currentQuestion.initialCode);
    }
    currentQuestion.question = this.removeWhiteCharsFromLineStarts(currentQuestion.question);
  }

  removeWhiteCharsFromLineStarts(str: string): string {
    const tmp = str;
    const splittedStr = tmp.split('\n');
    if(splittedStr.length === 1) {
      return str;
    }
    const numberOfWhiteSpaces = splittedStr[1].search(/\S/);
    return splittedStr[0] + splittedStr.slice(1).map(t => t.substring(numberOfWhiteSpaces)).join('\n').trim();
  }

  getRandomQuestionIndices(maxIndex) {
    const questionIndices = [];
    for (let i = 0; i < maxIndex; i++) {
      questionIndices.push(i);
    }
    return questionIndices.sort(() => .5 - Math.random());
  }

  randomSpaces() {
    const n = Math.floor((Math.random() * 10) + 1);
    let ret = '';
    for (let i = 0; i < n; i++) {
      ret += ' ';
    }
    return ret;
  }

  tickerFuncProtectResult(t) {
    this.endResult = this.result + this.randomSpaces();
  }

  tickerFunc(t) {
    this.endResult = this.result + this.randomSpaces();
    // 60 másodperctől számol vissza
    const time = this.randomQuestions[this.currentQuestionIndex].time === undefined ?
      60 : this.randomQuestions[this.currentQuestionIndex].time;
    this.countdown = time * 1000 - t * 1000;
    if (this.countdown === 0) {
      this.checkCodeSolution();
    }
  }

  showDialog(title: string, callbackFunction: any) {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);
    config.context = { data: title };
    config.isClosable = false;
    config.size = 'small';
    this.modalService.open(config).onApprove(callbackFunction).onDeny(callbackFunction);
  }
}
