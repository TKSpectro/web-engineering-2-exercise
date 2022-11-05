import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor() {}

  add(leftNumber: number, rightNumber: number): number {
    return leftNumber + rightNumber;
  }

  subtract(leftNumber: number, rightNumber: number): number {
    return leftNumber - rightNumber;
  }

  multiply(leftNumber: number, rightNumber: number): number {
    return leftNumber * rightNumber;
  }

  divide(leftNumber: number, rightNumber: number): number {
    return leftNumber / rightNumber;
  }
}
