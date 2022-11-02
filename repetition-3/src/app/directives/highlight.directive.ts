import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private oldColor!: string;

  constructor(private el: ElementRef) {
    this.oldColor = el.nativeElement.style.backgroundColor;

    el.nativeElement.style.backgroundColor = 'blue';
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = this.oldColor;
  }
}
