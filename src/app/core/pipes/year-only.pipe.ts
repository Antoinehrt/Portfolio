import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearOnly',
  standalone: true
})
export class YearOnlyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
