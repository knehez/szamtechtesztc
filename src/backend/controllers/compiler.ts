
import compileRun from 'compile-run';
export default class CompilerCtrl {

  compileTest = (req, res) => {
    compileRun.c.runSource('#include<stdio.h> \n main() { printf("from source"); }', { stdin: '3\n2 ' }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }

  compilePost = (req, res) => {
    compileRun.c.runSource(req.body.source, {stdin: req.body.stdin}, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }
}
