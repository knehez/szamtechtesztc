import { Component } from '@angular/core';
import { testQuestions } from './questions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import Prism from 'prismjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  testStarted: Boolean = false;
  questionsInTest = 18;
  correctAnswers = 0;
  testFinished = false;
  currentQuestionIndex = 0;
  currentCorrectAnswer = -1;
  currentCode = '';
  currentAnswers = [];
  timerStream;
  countdown = 0;
  randomQuestions = [];

  public startTest() {
    if (this.testStarted) {
      alert('A teszt már elindult, nem lehet újra indítani. \n Újrakezdéshez frissítse a lapot.');
      return;
    }
    this.testStarted = true;

    this.randomQuestions = testQuestions.sort(() => .5 - Math.random());
    console.log('kérdések száma:' + this.randomQuestions.length);
    this.currentQuestionIndex = 0;
    this.setNextQuestions();
    this.startCountdownTimer();
  }

  startCountdownTimer() {
    const timer = Observable.timer(0, 1000);
    this.timerStream = timer.subscribe(t => this.tickerFunc(t));
  }

  tickerFunc(t) {
    // 60 másodperctől számol vissza
    this.countdown = 60 * 1000 - t * 1000;
    if (this.countdown === 0) {
      this.checkSolution(-1);
    }
  }

  checkSolution(selectedAnswer: number) {
    this.timerStream.unsubscribe();

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
}
