import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  constructor(private http: HttpClient) {}

  getCount(count: number) {
    return this.http.get<number[]>(`/api/count/${count}`);
  }

  getAverage(numbers: number[]) {
    return numbers.reduce((a, b) => a + b) / numbers.length;
  }

  getSum(numbers: number[]) {
    return numbers.reduce((a, b) => a + b);
  }
}
