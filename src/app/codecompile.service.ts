import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompilerService {

    constructor(private http: Http) { }

    compileCode(data) {
        return new Promise((resolve, reject) => {
            this.http.post('/c-compiler-backend/compiler', data)
                .map(res => res.json())
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
