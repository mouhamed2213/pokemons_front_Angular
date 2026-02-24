import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
})
export class BorderCardDirective {
  private initColor!: string;
  private defaultColor!: string;
  private deaultHeight!: number;

  constructor(private el: ElementRef) {
    this.setBorder('#f5f5f5');
    this.setHeight(140);
  }

  @Input('pkmnBorderCard') borderColor!: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBorder(this.borderColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
