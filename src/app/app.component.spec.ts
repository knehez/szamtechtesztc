import { fakeAsync, tick } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { CompilerService } from './codecompile.service';
import { ConfirmationService } from 'primeng/api';
import { codeQuestions_0 } from './codeQuestions_0';
import { codeQuestions_2 } from './codeQuestions_2';

const success = (stdout = 'ok') => ({ stdout, stderr: '', exitCode: 0 });

describe('AppComponent quiz lifecycle', () => {
  let app: AppComponent;
  let compiler: jasmine.SpyObj<CompilerService>;
  let confirmations: jasmine.SpyObj<ConfirmationService>;
  let responses: Subject<any>[];
  let dialogs: any[];

  beforeEach(() => {
    responses = [];
    dialogs = [];
    compiler = jasmine.createSpyObj('CompilerService', ['compileCode']);
    compiler.compileCode.and.callFake(() => {
      const response = new Subject<any>();
      responses.push(response);
      return response.asObservable();
    });
    confirmations = jasmine.createSpyObj('ConfirmationService', ['confirm', 'close']);
    confirmations.confirm.and.callFake((dialog) => { dialogs.push(dialog); return confirmations; });
    app = new AppComponent(compiler, confirmations);
    app.testStarted = true;
    app.randomQuestions = [0, 1].map(() => ({
      question: 'Test', testCode: '', stdin: '', result: success(), time: 60
    }));
    app.questionsInTest = 2;
    app.setUpNextQuestion();
    app.startCountdownTimer();
  });

  afterEach(() => app.ngOnDestroy());

  it('selects 16 questions without modifying the question bank', () => {
    const original = codeQuestions_0.map((question) => question.initialCode);
    app.testStarted = false;
    app.randomQuestions = [];
    app.startTest();
    expect(app.questionsInTest).toBe(16);
    expect(app.randomQuestions.filter((question) => question.level === 0).length).toBe(3);
    expect(app.randomQuestions.filter((question) => question.level === 1).length).toBe(3);
    expect(codeQuestions_0.map((question) => question.initialCode)).toEqual(original);
    expect(app.countdown).toBe(180000);
  });

  it('allows only one request and one point per question', () => {
    app.checkCodeSolution();
    app.checkCodeSolution();
    app.checkTestSolution();
    expect(compiler.compileCode).toHaveBeenCalledTimes(1);
    responses[0].next(success());
    app.checkCodeSolution();
    expect(app.correctAnswers).toBe(1);
    const accept = dialogs[0].accept;
    accept();
    accept();
    expect(app.currentQuestionIndex).toBe(1);
    expect(app.questionClosed).toBe(false);
  });

  it('starts immediately and expires at the actual deadline', fakeAsync(() => {
    app.startCountdownTimer();
    expect(app.countdown).toBe(60000);
    tick(1000);
    expect(app.countdown).toBe(59000);
    tick(59000);
    expect(app.countdown).toBe(0);
    expect(app.questionClosed).toBe(true);
    expect(dialogs.length).toBe(1);
  }));

  it('discards a response after timeout and after advancing', fakeAsync(() => {
    app.startCountdownTimer();
    app.checkCodeSolution();
    tick(60000);
    responses[0].next(success());
    expect(app.correctAnswers).toBe(0);
    dialogs[0].accept();
    responses[0].next(success());
    expect(app.currentQuestionIndex).toBe(1);
    expect(app.correctAnswers).toBe(0);
    expect(app.isCompiling).toBe(false);
    app.stopTimer();
  }));

  it('rejects a response past the deadline before a timer callback runs', () => {
    const now = Date.now();
    app.checkCodeSolution();
    spyOn(Date, 'now').and.returnValue(now + 61000);
    responses[0].next(success());
    expect(app.correctAnswers).toBe(0);
    expect(app.questionClosed).toBe(true);
  });

  it('allows three submissions, without resetting the time for retries', fakeAsync(() => {
    app.startCountdownTimer();
    for (let i = 0; i < 3; i++) {
      app.checkCodeSolution();
      responses[i].next(success('wrong'));
      expect(app.remainingRetries).toBe(Math.max(0, 1 - i));
      expect(app.questionClosed).toBe(i === 2);
      if (i < 2) {
        tick(1000);
        dialogs[i].accept();
      }
    }
    expect(app.countdown).toBe(58000);
  }));

  it('ignores a retry dialog callback superseded by timeout', fakeAsync(() => {
    app.startCountdownTimer();
    app.checkCodeSolution();
    responses[0].next(success('wrong'));
    const retryAccept = dialogs[0].accept;
    tick(60000);
    retryAccept();
    expect(app.dialogOpen).toBe(true);
    dialogs[1].accept();
    expect(app.currentQuestionIndex).toBe(1);
    expect(app.countdown).toBe(60000);
    app.stopTimer();
  }));

  it('does not consume attempts on an HTTP error', () => {
    app.checkCodeSolution();
    responses[0].error(new Error('offline'));
    expect(app.remainingRetries).toBe(2);
    expect(app.canRun).toBe(true);
    expect(app.compilerOutput).toContain('nem érhető el');
  });

  it('handles an invalid response as an incorrect answer', () => {
    app.checkCodeSolution();
    responses[0].next(null);
    expect(app.correctAnswers).toBe(0);
    expect(app.remainingRetries).toBe(1);
  });

  it('keeps trial runs separate from scoring and handles missing output', () => {
    app.checkTestSolution();
    responses[0].next({});
    expect(app.correctAnswers).toBe(0);
    expect(app.remainingRetries).toBe(2);
    expect(app.isCompiling).toBe(false);
    expect(app.compilerOutput).toContain('Executable output:');
  });

  it('requires all test cases, with one attempt charged for a failed submission', () => {
    app.randomQuestions[0].testCases = [{ stdin: 'second', result: success('other') }];
    app.checkCodeSolution();
    responses[0].next(success());
    expect(app.correctAnswers).toBe(0);
    expect(app.isCompiling).toBe(true);
    expect(compiler.compileCode.calls.mostRecent().args[0].stdin).toBe('second');
    responses[1].next(success());
    expect(app.remainingRetries).toBe(1);
    expect(app.correctAnswers).toBe(0);
  });

  it('awards one point for passing all test cases', () => {
    app.randomQuestions[0].testCases = [{ stdin: 'second', result: success('other') }];
    app.checkCodeSolution();
    responses[0].next(success());
    responses[1].next(success('other'));
    expect(app.correctAnswers).toBe(1);
    expect(app.questionClosed).toBe(true);
  });

  it('clears old code and compiler output on question change', () => {
    app.codeInput = 'old';
    app.compilerOutput = 'old';
    app.setUpNextQuestion();
    expect(app.codeInput).toBe('');
    expect(app.compilerOutput).toBe('');
  });

  it('stops the timer when the last question finishes', () => {
    app.currentQuestionIndex = 1;
    app.checkCodeSolution();
    responses[0].next(success());
    dialogs[0].accept();
    expect(app.testFinished).toBe(true);
    expect(app.timerStream).toBeNull();
    expect(app.endResult).toContain('Végeredmény:');
  });

  it('cancels requests when the component is destroyed', () => {
    app.checkCodeSolution();
    app.ngOnDestroy();
    responses[0].next(success());
    expect(app.correctAnswers).toBe(0);
    expect(app.timerStream).toBeNull();
  });

  it('preserves newlines and relative indentation', () => {
    expect(app.removeWhiteCharsFromLineStarts('first\n  second\n    third'))
      .toBe('first\nsecond\n  third');
    expect(app.removeWhiteCharsFromLineStarts('\n    int main() {\n        return 0;\n    }\n'))
      .toBe('int main() {\n    return 0;\n}');
    expect(app.removeWhiteCharsFromLineStarts('\n  \n')).toBe('');
  });
});

describe('Question bank regressions', () => {
  it('keeps C null escapes literal in starter code and solutions', () => {
    for (const question of codeQuestions_0) {
      expect(question.initialCode).not.toContain('\0');
      expect(question.solution).not.toContain('\0');
    }
    expect(codeQuestions_0[9].initialCode).toContain("'\\0'");
  });

  it('uses an even number and a nonempty destination to exercise missing statements', () => {
    expect(codeQuestions_0[7].initialCode).toContain('{1, 3, 6, 7}');
    expect(codeQuestions_0[7].result.stdout).toBe('0');
    expect(codeQuestions_0[9].initialCode).toContain("{'?', '?', '?', '\\0'}");
  });

  it('adds a different expected output for each input-driven level 2 task', () => {
    for (const question of codeQuestions_2) {
      if (question.stdin) {
        expect(question.testCases.length).toBeGreaterThan(0);
        expect(question.testCases[0].result.stdout).not.toBe(question.result.stdout);
      }
    }
  });
});
