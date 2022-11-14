import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  name!: string;
  age!: number;
  email!: string;
  message!: string;
  phone!: string;

  maxAge = 99;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    alert(
      JSON.stringify({
        name: this.name,
        age: this.age,
        email: this.email,
        message: this.message,
        phone: this.phone,
      })
    );
  }
}
