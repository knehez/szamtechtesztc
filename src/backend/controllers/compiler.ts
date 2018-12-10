
import compileRun from 'compile-run';
export default class CompilerCtrl {
  salt = 'HGE%+/635362GHGSDOIZEWLKJDCSD)(=+GJH';

  compilePost = (req, res) => {
    if (this.hashCode(req.body.source + this.salt) !== req.body.hashCode) {
      res.json({});
    }
    compileRun.c.runSource(req.body.source, { stdin: req.body.stdin }, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  }

  hashCode = (str: string) => {
    let hash = 5381, i = str.length;
    while (i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
  }
}
