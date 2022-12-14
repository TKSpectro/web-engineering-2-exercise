import { TestBed } from '@angular/core/testing';

import { DivideService } from './divide.service';

describe('DivideService', () => {
  let service: DivideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('divide', () => {
    expect(service.divide(10, 5)).toBe(2);
  });

  it('divide by 0', () => {
    expect(service.divide(10, 0)).toBeNaN();
  });
});
