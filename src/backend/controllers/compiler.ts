import { request as httpRequest } from 'http';
import { request as httpsRequest } from 'https';
import { URL } from 'url';
import compileRun from "compile-run";

const REMOTE_COMPILER_URL = process.env.REMOTE_COMPILER_URL || 'https://compaq.iit.uni-miskolc.hu/c-compiler-backend/compiler';

export default class CompilerCtrl {
  salt = "HGE%+/635362GHGSDOIZEWLKJDCSD)(=+GJH";

  compilePost = (req, res) => {
    if (this.hashCode(req.body.source + this.salt) !== req.body.hashCode) {
      res.json({});
      return;
    }

    if (process.platform === 'win32') {
      this.forwardToRemoteCompiler(req.body)
        .then((remoteResult) => {
          res.json(remoteResult);
        })
        .catch((error) => {
          const message = error && error.message ? error.message : 'Remote compiler request failed.';
          res.status(502).json({
            stderr: message,
            stdout: '',
            exitCode: undefined,
          });
        });
      return;
    }

    compileRun.c.runSource(
      req.body.source,
      {
        stdin: req.body.stdin,
        compileTimeout: 10000,
      },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          res.json(result);
        }
      }
    );
  };

  forwardToRemoteCompiler = (payload: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        const url = new URL(REMOTE_COMPILER_URL);
        const body = JSON.stringify(payload);
        const transport = url.protocol === 'http:' ? httpRequest : httpsRequest;

        const request = transport(
          {
            hostname: url.hostname,
            port: url.port ? Number(url.port) : undefined,
            path: url.pathname + url.search,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': Buffer.byteLength(body),
            },
          },
          (response) => {
            let responseData = '';
            response.setEncoding('utf8');
            response.on('data', (chunk) => {
              responseData += chunk;
            });
            response.on('end', () => {
              const status = response.statusCode || 0;
              if (status >= 200 && status < 300) {
                try {
                  const parsed = responseData ? JSON.parse(responseData) : {};
                  resolve(parsed);
                } catch (parseError) {
                  reject(new Error('Failed to parse remote compiler response.'));
                }
              } else {
                const statusMessage = `Remote compiler responded with status ${status}.`;
                reject(new Error(responseData ? `${statusMessage} ${responseData}` : statusMessage));
              }
            });
          }
        );

        request.on('error', (err) => {
          reject(err);
        });

        request.setTimeout(15000, () => {
          request.destroy(new Error('Remote compiler request timed out.'));
        });

        request.write(body);
        request.end();
      } catch (err) {
        reject(err);
      }
    });
  };

  hashCode = (str: string) => {
    let hash = 5381,
      i = str.length;
    while (i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
  };
}
