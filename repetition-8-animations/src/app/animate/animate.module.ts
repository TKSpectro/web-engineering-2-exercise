import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimateComponent } from './animate.component';

@NgModule({
  declarations: [AnimateComponent],
  imports: [CommonModule],
  exports: [AnimateComponent],
})
export class AnimateModule {}
