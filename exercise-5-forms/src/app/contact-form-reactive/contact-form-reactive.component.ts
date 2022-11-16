import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validator';

@Component({
  selector: 'app-contact-form-reactive',
  templateUrl: './contact-form-reactive.component.html',
  styleUrls: ['./contact-form-reactive.component.scss'],
})
export class ContactFormReactiveComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: this.fb.control('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
      lastname: this.fb.control('', {
        validators: [Validators.required],
        updateOn: 'change',
      }),
      age: this.fb.control(undefined, {
        validators: [Validators.required, CustomValidators.between(18, 65)],
        updateOn: 'change',
      }),
    });
  }

  public alert(val: unknown): void {
    alert(JSON.stringify(val));
  }
}
