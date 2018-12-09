import * as express from 'express';
import CompilerCtrl from './controllers/compiler';

export default function setRoutes(app) {

  const router = express.Router();

  const compiler = new CompilerCtrl();

  router.route('/compiler').post(compiler.compilePost);
  router.route('/compiler').get(compiler.compileTest);

  app.use('/c-compiler-backend', router);
}
