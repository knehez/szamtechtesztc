import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CompilerService {
    salt = 'HGE%+/635362GHGSDOIZEWLKJDCSD)(=+GJH';

    constructor(private http: HttpClient) { }

    compileCode(data) {
        return new Promise((resolve, reject) => {
            data.hashCode = this.hashCode(data.source + this.salt);
            this.http.post('/c-compiler-backend/compiler', data)
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
