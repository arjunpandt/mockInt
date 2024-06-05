import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe',
  standalone: true
})
export class DemoPipePipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    return  value.toUpperCase();
  }

}
