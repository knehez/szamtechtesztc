import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import setRoutes from './routes';

const app = express();

dotenv.config({
  path: 'settings.env',
});

app.set('port', (process.env.PORT || 3003));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }));

setRoutes(app);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(app.get('port'), () => {
  process.stdout.write('Angular Full Stack listening on port ' + app.get('port') + '\n');
  process.stdout.write('Compiler started\n');
});


export { app };
