import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
  // Método que transformara alguma coisa pra ser mostrado na tela.
  // Temos que sobrescreve-lo.
  transform(value: any, args?: any): any {
    console.log('Executing pipe...');

    const values = value.split(' ');
    let result = '';

    for (const v of values) {
      result += this.capitalize(v) + ' ';
    }

    return result;
  }

  capitalize(v: string) {
    return v.substr(0, 1).toUpperCase() + v.substr(1).toLowerCase();
  }
}
