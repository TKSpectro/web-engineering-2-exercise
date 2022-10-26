import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() content = '';
  public content2 = 'This is the content2 property';

  constructor() {}

  ngOnInit(): void {}

  clickMeHandler = () => {
    alert(this.content2);
  };
}
