import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormReactiveComponent } from './contact-form-reactive.component';

@NgModule({
  declarations: [ContactFormReactiveComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ContactFormReactiveComponent],
})
export class ContactFormReactiveModule {}
