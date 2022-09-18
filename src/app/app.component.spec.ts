import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CounterService } from './counter.service';
import { Observable, of  } from 'rxjs';
import { By } from '@angular/platform-browser';

@Component({selector: 'up', template: ''})
class UpStubComponent {
}


describe('AppComponent', () => {

  const counterService = jasmine.createSpyObj<CounterService>('CounterService', ['counter']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        UpStubComponent
      ],
      providers: [{ provide: CounterService, useValue: counterService }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-counter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-counter');
  });

  it('should display couter from counterService', () => {
    counterService.counter = of(10);
    TestBed.inject(CounterService)
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.counter.subscribe(c=> expect(c).toBe(10));
  });

  it('should display the right color when 10', () => {
    counterService.counter = of(10);
    TestBed.inject(CounterService);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const card  = element.querySelector('div.card-body');
    expect(getComputedStyle(card).getPropertyValue('background-color')).toEqual('rgb(231, 76, 60)');
  });

  it('should display the right color when -10', () => {
    counterService.counter = of(-10);
    TestBed.inject(CounterService);
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const card  = element.querySelector('div.card-body');
    expect(getComputedStyle(card).getPropertyValue('background-color')).toEqual('rgb(39, 174, 96)');
  });
});
