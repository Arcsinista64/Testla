import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoDescripcionAutos'
})
export class FormatoDescripcionAutosPipe implements PipeTransform {

  transform(value: string, limite: number): string {
    
    let limit =limite;

    return value.length > limit ? value.substring(0,limit)+"..." :   value;
  }

}
