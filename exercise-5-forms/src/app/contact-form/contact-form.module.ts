import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from './contact-form.component';

@NgModule({
  declarations: [ContactFormComponent],
  imports: [CommonModule, FormsModule],
  exports: [ContactFormComponent],
})
export class ContactFormModule {}
