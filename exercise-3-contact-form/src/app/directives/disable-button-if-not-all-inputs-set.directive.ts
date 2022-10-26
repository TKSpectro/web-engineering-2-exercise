import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDisableButtonIfNotAllInputsSet]',
})
export class DisableButtonIfNotAllInputsSetDirective {
  @Input() appDisableButtonIfNotAllInputsSet = false;

  constructor(private el: ElementRef) {
    console.log('allSet', this.appDisableButtonIfNotAllInputsSet);
    this.el.nativeElement.disabled = !this.appDisableButtonIfNotAllInputsSet;
  }
}
