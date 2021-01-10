import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    //value ===>Angular11
    return '${arg[1]}  ${arg[0]} ${value}';
  }

}
