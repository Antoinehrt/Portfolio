import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ExperienceEntry} from "../../models/experience-entry";

@Injectable({
  providedIn: 'root',
})
export class StaticDataService {
  private jsonUrl = 'assets/data/app-data.json';

  constructor(private http: HttpClient) {
  }

  getStaticData(): Observable<{ experienceEntries: ExperienceEntry[] }> {
    return this.http.get<{ experienceEntries: ExperienceEntry[] }>(this.jsonUrl);
  }

}
