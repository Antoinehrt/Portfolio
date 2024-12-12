import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearOnly',
  standalone: true
})
export class YearOnlyPipe implements PipeTransform {
  transform(value: string): string {
    let date: Date = new Date(value)
    return date.getFullYear().toString();
  }
}
