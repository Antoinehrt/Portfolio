import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private _componentToDisplay: BehaviorSubject<string> = new BehaviorSubject<string>('education');
  componentToDisplay$ = this._componentToDisplay.asObservable();

  constructor() { }

  get componentToDisplay(): string {
    return this._componentToDisplay.value;
  }

  set componentToDisplay(value: string) {
    this._componentToDisplay.next(value);
  }
}
