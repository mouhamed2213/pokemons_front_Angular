import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'hpColor',
})
export class HpColorPipe implements PipeTransform {
  transform(hpValue: number, ...args: any[]) {
    let color: string;
    color =
      hpValue >= 20
        ? ' flex item-center justify-center bg-green-500 rounded-lg text-white'
        : 'flex item-center justify-center bg-red-500 rounded-lg text-white';
    return color;
  }
}
