import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appDisableButtonIfNotAllInputsSet]',
})
export class DisableButtonIfNotAllInputsSetDirective {
  @Input() appDisableButtonIfNotAllInputsSet!: string[];

  constructor(private el: ElementRef) {
    this.el.nativeElement.disabled = this.appDisableButtonIfNotAllInputsSet;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const allSet = (changes[
      'appDisableButtonIfNotAllInputsSet'
    ]?.currentValue).every((input: string) => input?.length > 0);

    this.el.nativeElement.disabled = !allSet;
  }
}
