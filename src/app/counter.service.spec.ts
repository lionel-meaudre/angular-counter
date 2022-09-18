import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('increase should give right value', () => {
    service.resetCurrentValue();
    expect(service.increase()).toBe(1);
    service.counter.subscribe(c=> expect(c).toBe(1));
  });

  it('decrease should give right value', () => {
    service.resetCurrentValue();
    expect(service.decrease()).toBe(-1);
    service.counter.subscribe(c=> expect(c).toBe(-1));
  });

  it('increase 30 should give right value and right step', () => {
    service.resetCurrentValue();
    for(let i = 0; i < 31 ; i++){
      service.increase();
    }
    expect(service.getCurrentStep()).toBe(2);
    service.counter.subscribe(c=> expect(c).toBe(33));
  });
});
