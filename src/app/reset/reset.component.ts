import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';
import { FormControl, FormBuilder, FormGroup, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  success : boolean = false;
  message : string = '';

  birthdateCtrl : FormControl;
  resetForm : FormGroup;

  constructor(private counterService: CounterService, private formBuilder: FormBuilder) {
    this.birthdateCtrl = new FormControl(
      formatDate(new Date(), 'yyyy-MM-dd', 'en-US'),
      Validators.compose([Validators.required, ResetComponent.isOldEnough])
    );

    this.resetForm = this.formBuilder.group(
      { birthdate: this.birthdateCtrl }
    );

    this.resetForm.valueChanges.subscribe(() => {
      this.message = '';
    })
  }

  ngOnInit(): void {}

  reset(): void{

    if(this.resetForm.valid) {
      this.counterService.resetCurrentValue();
      this.success = true;
      this.message = "Counter has been reset!";
    }
    else{
      this.success = false;
      this.message = "You must be at least 18 to reset!";
    }
  }

  private static computeAge(birthday: Date) : number { // birthday is a date
    var ageDifMs = Date.now() - Number(birthday);
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  private static isOldEnough (control: AbstractControl): ValidationErrors | null {
    // control is a date input, so we can build the Date from the value
    const age = ResetComponent.computeAge(new Date(control.value));
    return age >= 18 ? null : { tooYoung: true };
  };
}
