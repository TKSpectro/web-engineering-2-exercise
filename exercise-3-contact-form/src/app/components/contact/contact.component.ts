import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  private translate: TranslateService;

  @Input() name!: string;
  @Input() email!: string;
  @Input() message!: string;

  constructor(translate: TranslateService) {
    this.translate = translate;
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

  langHandler(lang: string): void {
    this.translate.use(lang || 'en');
  }
}
