import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoModelosAutos'
})
export class FormatoModelosAutosPipe implements PipeTransform {

  transform(modelos: number[], ...args: unknown[]): unknown {
    
    let fixedValue: string;
    let cantidad: number = modelos.length;

    if(modelos.length == 1)
    {
      return fixedValue = `${modelos}`;
    }
    else
    {
      return fixedValue = `${modelos[0]} - ${modelos[cantidad - 1]}`;
    }


  }
}
