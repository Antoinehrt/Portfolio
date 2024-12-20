import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private _currentComponent: BehaviorSubject<string> = new BehaviorSubject<string>('experience');
  currentComponent$ = this._currentComponent.asObservable();

  constructor() {
  }

  get currentComponent(): string {
    return this._currentComponent.value;
  }

  set currentComponent(value: string) {
    this._currentComponent.next(value);
  }
}
