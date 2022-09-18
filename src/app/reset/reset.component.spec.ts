import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetComponent } from './reset.component';


describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent reset if age is too low', () => {
    component.birthdateCtrl.setValue('2022-01-01');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.birthdateCtrl.valid == false);
    expect(component.birthdateCtrl.hasError("isOldEnough") == true);
    expect(component.success).toBeFalse();
  });

  it('should reset if age high enough', () => {
    component.birthdateCtrl.setValue('2002-01-01');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    expect(component.success).toBeTrue();
  });

  it('should call reset on click', () => {
    spyOn(component, 'reset');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    expect(component.reset).toHaveBeenCalledTimes(1);
  });
});
