import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipe implements PipeTransform {

  transform(value: Date | string | number, ...args: any[]): string {
    // I pass here date format which is different for each language
    // In real project, it's amDateFormat pipe
    return 'pipe result';
  }

}
