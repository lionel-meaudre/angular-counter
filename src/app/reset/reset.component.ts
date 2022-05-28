import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  birthdate: Date = new Date();
  message: string = '';
  success: boolean = false;

  ngOnInit(): void {
  }

  reset(): void{
    const age = this.computeAge(this.birthdate);
    if(age >= 18){
      this.counterService.resetCurrentValue();
      this.success = true;
      this.message = "Counter has been reset!";
    }
    else{
      this.success = false;
      this.message = "You must be at least 18 to reset!";
    }
  }

  dateChanged(event: any){
    if(event.target != null)
    {
      this.birthdate = event.target.valueAsDate;
    }
  }

  private computeAge(birthday: Date) : number {
    var ageDifMs = Date.now() - Number(birthday);
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
