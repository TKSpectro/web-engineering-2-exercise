import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';

@Injectable()
export class AppService {
  getCount(count: number): number[] {
    const array = new Array<number>();
    for (let i = 0; i < count; i++) {
      array.push(randomInt(100));
    }
    return array;
  }
}
