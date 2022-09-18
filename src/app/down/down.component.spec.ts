import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownComponent } from './down.component';

describe('DownComponent', () => {
  let component: DownComponent;
  let fixture: ComponentFixture<DownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a button with right text', () => {
    const element = fixture.nativeElement;
    const button = element.querySelector('button');
    expect(button.innerHTML).toBe('Decrease value from 1');
  });

  it('should call decrease on click', () => {

    spyOn(component, 'decrease');

    const element = fixture.nativeElement;
    const button = element.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.decrease).toHaveBeenCalledTimes(1);
  });
});
