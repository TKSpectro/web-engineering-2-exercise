import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'repetition-3';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');

    translate.get('TITLE').subscribe((res: string) => {
      this.title = res;
    });
  }
}
