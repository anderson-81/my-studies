// Pipe personalizado (ele e um modulo).

import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'mySqrt'
})
export class MySqrt implements PipeTransform {
    transform(num: number) {
        return Math.sqrt(num);
    }
}
