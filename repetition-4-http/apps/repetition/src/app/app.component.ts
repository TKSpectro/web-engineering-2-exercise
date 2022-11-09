import { Component } from '@angular/core';
import { CountService } from './services/count.service';

@Component({
  selector: 'repetition-http-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count!: number;
  data$!: number[];

  average!: number;
  sum!: number;

  constructor(private countService: CountService) {}

  handleCount() {
    this.countService.getCount(this.count).subscribe((data) => {
      this.data$ = data;

      this.average = this.countService.getAverage(data);
      this.sum = this.countService.getSum(data);
    });
  }
}
