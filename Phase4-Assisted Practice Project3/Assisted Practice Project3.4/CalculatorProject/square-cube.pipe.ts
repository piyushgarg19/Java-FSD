import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareCube'
})
export class SquareCubePipe implements PipeTransform {

  transform(value: number, operation :'square' | 'cube'): number {
    if(operation==='square'){
      return value*value;
    }
    else if (operation==='cube'){
      return value*value*value;
    }
    else{
      return value;
    }
    
  }

}
