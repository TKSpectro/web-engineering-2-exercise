import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ascii',
})
export class AsciiPipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    let result2 = '';

    for (let i = 0; i < value.length; i++) {
      result += value.charCodeAt(i);
      if (i < value.length - 1) {
        result += ',';
      }
    }

    result2 = value
      .split('')
      .map((v) => v.charCodeAt(0))
      .join(',');
    console.log('ascii variant 2', result2);

    return result;
  }
}
