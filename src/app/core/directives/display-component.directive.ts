import { Directive } from '@angular/core';

@Directive({
  selector: '[appDisplayComponent]',
  standalone: true
})
export class DisplayComponentDirective {

  constructor() { }

}
