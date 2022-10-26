import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  i18n = 'en';

  @Input() name!: string;
  @Input() email!: string;
  @Input() message!: string;

  public allInputsSet =
    this.name?.length > 0 && this.email?.length > 0 && this.message?.length > 0;

  constructor(translate: TranslateService) {
    translate.use(this.i18n);
  }

  ngOnInit(): void {}

  onSubmit(): void {
    alert(
      JSON.stringify({
        name: this.name,
        email: this.email,
        message: this.message,
      })
    );
  }
}
