import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  leftNumber!: number;
  rightNumber!: number;
  result!: number;

  operation: string = '';

  constructor(public calculatorService: CalculatorService) {}

  operationHandler(op = ''): void {
    if (this.operation === '') {
      this.leftNumber = this.rightNumber;
      this.rightNumber = 0;
    } else {
      this.leftNumber = this.result;
      this.rightNumber = 0;
    }

    this.operation = op;
  }

  inputHandler(): void {
    switch (this.operation) {
      case '+':
        this.result = this.calculatorService.add(
          this.leftNumber,
          this.rightNumber
        );
        break;
      case '-':
        this.result = this.calculatorService.subtract(
          this.leftNumber,
          this.rightNumber
        );
        break;
      case '*':
        this.result = this.calculatorService.multiply(
          this.leftNumber,
          this.rightNumber
        );
        break;
      case '/':
        this.result = this.calculatorService.divide(
          this.leftNumber,
          this.rightNumber
        );
        break;

      default:
        break;
    }
  }
}
