import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'hpColor',
})
export class HpColorPipe implements PipeTransform {
  transform(hpValue: number, ...args: any[]) {
    let color: string;
    color = hpValue >= 20 ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
    return color;
  }
}
