import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComponent } from './up.component';

describe('UpComponent', () => {
  let component: UpComponent;
  let fixture: ComponentFixture<UpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with right text', () => {
    const element = fixture.nativeElement;
    const button = element.querySelector('button');
    expect(button.innerHTML).toBe('Increase value from 1');
  });

  it('should call increase on click', () => {

    spyOn(component, 'increase');

    const element = fixture.nativeElement;
    const button = element.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.increase).toHaveBeenCalledTimes(1);
  });
});
