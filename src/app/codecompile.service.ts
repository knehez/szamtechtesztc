import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CompilerService {
    salt = 'HGE%+/635362GHGSDOIZEWLKJDCSD)(=+GJH';

    constructor(private http: HttpClient) { }

    compileCode(data): Observable<any> {
        data.hashCode = this.hashCode(data.source + this.salt);
        return this.http.post('/c-compiler-backend/compiler', data);
    }

    hashCode = (str: string) => {
        let hash = 5381, i = str.length;
        while (i) {
            hash = (hash * 33) ^ str.charCodeAt(--i);
        }
        return hash >>> 0;
    }
}
