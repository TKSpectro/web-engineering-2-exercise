import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({})),
      state(
        'closed',
        style({
          'white-space': 'nowrap',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
        })
      ),
      transition('open => closed', [animate('0.5s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class AnimateComponent implements OnInit {
  isOpen = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  addClass() {
    this.renderer.addClass(this.document.body, 'fh-erfurt');
  }

  removeClass() {
    this.renderer.removeClass(this.document.body, 'fh-erfurt');
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
