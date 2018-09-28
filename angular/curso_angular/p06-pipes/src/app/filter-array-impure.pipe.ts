import { Pipe, PipeTransform } from '@angular/core';
import { FilterArrayPipe } from './filter-array.pipe';

// export class FilterArrayImpurePipe implements PipeTransform {

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({
  name: 'filterArrayImpure',
  pure: false // Atenção a esse metadado
})
export class FilterArrayImpurePipe extends FilterArrayPipe {
}
