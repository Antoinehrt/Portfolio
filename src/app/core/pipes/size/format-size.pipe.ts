import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'formatSize',
    standalone: true
})
export class FormatSizePipe implements PipeTransform {

    transform(sizeInKB: number): string {
        if (sizeInKB < 1024) {
            return `${sizeInKB} Ko`;
        } else if (sizeInKB < 1024 * 1024) {
            return `${(sizeInKB / 1024).toFixed(2)} Mo`;
        } else {
            return `${(sizeInKB / (1024 * 1024)).toFixed(2)} Go`;
        }
    }

}
