import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class StaticDataService {
  private jsonUrl = 'assets/data/app-data.json';

  constructor(private http: HttpClient) {
  }

  getStaticData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
