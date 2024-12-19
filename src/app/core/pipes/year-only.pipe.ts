import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'yearOnly',
  standalone: true
})
export class YearOnlyPipe implements PipeTransform {
  transform(value: Date): string {
    return value.getFullYear().toString();
  }
}
