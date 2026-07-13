import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    private http = inject(HttpClient);
    private locale = inject(LOCALE_ID);

    getData<T>(filename: string): Observable<T> {
        const localizedUrl = `./assets/data/${this.locale}.json`;
        const fallbackUrl = `./assets/data/en.json`;

        return this.http.get<T>(localizedUrl).pipe(
            catchError(() => this.http.get<T>(fallbackUrl))
        );
    }
}
