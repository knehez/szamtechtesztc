import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompilerService {
    salt = 'HGE%+/635362GHGSDOIZEWLKJDCSD)(=+GJH';

    constructor(private http: Http) { }

    compileCode(data) {
        return new Promise((resolve, reject) => {
            data.hashCode = this.hashCode(data.source + this.salt);
            this.http.post('/c-compiler-backend/compiler', data)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
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
