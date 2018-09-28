import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusText'
})
export class StatusTextPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.getStatus(value);
  }

  getStatus(b: boolean) {
    return b ? 'Active' : 'Inactive';
  }
}
