import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DivideService {
  constructor() {}

  divide(a: number, b: number): number {
    if (b === 0) {
      return NaN;
    }

    return a / b;
  }
}
