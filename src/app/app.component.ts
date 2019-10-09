import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import Prism from 'prismjs';
import { codeQuestions } from './codeQuestions';
import { CompilerService } from './codecompile.service';
import 'brace/index';
import 'brace/mode/c_cpp.js';
import 'brace/theme/eclipse.js';
import 'brace/ext/language_tools.js';
import 'brace/snippets/c_cpp.js';
import 'brace/snippets/text.js';

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

  constructor(private compilerService: CompilerService) { }

  get result(): string {
    return (this.testFinished ? 'Végeredmény: ' : 'Részeredmény: ') + this.correctAnswers + '/' + this.questionsInTest +
      ' (' + (this.correctAnswers * 100 / this.questionsInTest).toPrecision(2) + '%)';
  }

  public startTest() {
    if (this.testStarted) {
      alert('A teszt már elindult, nem lehet újra indítani. \n Újrakezdéshez frissítse a lapot.');
      return;
    }
    this.testStarted = true;

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
    // this.randomQuestions.push(...codeQuestions.sort(() => .5 - Math.random()));
    console.log('kérdések száma:' + this.randomQuestions.length);
    this.questionsInTest = this.randomQuestions.length;
    this.currentQuestionIndex = 0;
    this.setNextQuestions();
    this.startCountdownTimer();
  }

  startCountdownTimer() {
    const timer = Observable.timer(0, 1000);
    this.timerStream = timer.subscribe(t => this.tickerFunc(t));
  }

  checkTestSolution() {
    const stdin = this.randomQuestions[this.currentQuestionIndex].stdin;
    const result = this.randomQuestions[this.currentQuestionIndex].result;
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
      console.log(solution);
      // solution is OK whether these 3 properties are equuals
      // { 'stderr': '', 'stdout': 'xxxx', 'exitCode': 0 },
      if (solution.stderr === userSolution.stderr &&
        solution.stdout === userSolution.stdout &&
        solution.exitCode === userSolution.exitCode) {
        alert('A válasza helyes');
        this.correctAnswers++;
      } else {
        alert('A válasza helytelen');
      }
      if (this.currentQuestionIndex < this.questionsInTest - 1) {
        this.codeInput = '';
        this.currentQuestionIndex++;
        this.setNextQuestions();
        this.startCountdownTimer();
      } else {
        this.testFinished = true;
        alert('Vége a tesztnek');
        const timer = Observable.timer(0, 1000);
        this.timerStream = timer.subscribe(t => this.tickerFuncProtectResult(t));
      }
    }, (err) => {
      alert(err);
    });
  }

  checkSolution(selectedAnswer: number) {
    this.timerStream.unsubscribe();
    this.compilerOutput = '';
    if (selectedAnswer === this.currentCorrectAnswer) {
      alert('A válasza helyes');
      this.correctAnswers++;
    } else if (selectedAnswer !== -1) {
      alert('A válasza helytelen');
    } else {
      alert('Az idő sajnos lejárt.');
    }

    if (this.currentQuestionIndex < this.questionsInTest - 1) {
      this.currentQuestionIndex++;
      this.setNextQuestions();
      this.startCountdownTimer();
    } else {
      this.testFinished = true;
      alert('Vége a tesztnek');
    }
  }

  setNextQuestions() {
    const currentQuestion = this.randomQuestions[this.currentQuestionIndex];
    this.currentAnswers = [];
    // egyszerű feleltválasztós teszt
    if (currentQuestion.result === undefined) {
      this.setupTestQuestion(currentQuestion);
    } else {
      if (currentQuestion.initialCode !== undefined) {
        // Ha van a kérdésben kódrészlet, akkor formázni kell:
        //
        // megnézzük hány üres karakter van a második sor előtt?
        // amennyi van annyit veszünk el minden sor elejéből
        //
        const trimmedFirstLine = currentQuestion.initialCode;
        const numberOfWhiteSpaces = trimmedFirstLine.split('\n')[1].search(/\S/);
        this.codeInput = trimmedFirstLine.split('\n').map(t => t.substring(numberOfWhiteSpaces)).join('\n').trim();
      }
    }
  }

  setupTestQuestion(currentQuestion) {
    const randomIndices = this.getRandomQuestionIndices(currentQuestion.wrong.length + 1);
    this.currentAnswers[randomIndices[0]] = currentQuestion.good;
    this.currentCorrectAnswer = randomIndices[0];
    for (let i = 1; i < randomIndices.length; i++) {
      this.currentAnswers[randomIndices[i]] = currentQuestion.wrong[i - 1];
    }
    this.currentCode = Prism.highlight(currentQuestion.code, Prism.languages.clike, 'clike');
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
      this.checkSolution(-1);
    }
  }
}
