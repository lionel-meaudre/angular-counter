import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private stepValue : number = 1;
  private nbActions : number = 0;

  private get counterValue():number {

    const value = sessionStorage.getItem('counterValue');

    if(value == null)
      return 0;

    return Number(value);
  }

  private counterSource = new BehaviorSubject(this.counterValue);

  counter = this.counterSource.asObservable();

  private set counterValue(value: number) {
    this.counterSource.next(value);
    sessionStorage.setItem('counterValue', value.toString());
  }

  private updateAction(){
    this.nbActions++;

    if(this.nbActions % 30 == 0 ){
      this.stepValue *= 2;
    }
  }

  increase(): number{
    this.updateAction();
    this.counterValue += this.stepValue;
    return this.counterValue;
  }

  decrease(): number{
    this.updateAction();
    this.counterValue -= this.stepValue;
    return this.counterValue;
  }

  resetCurrentValue(){
    this.counterValue = 0;
  }

  getCurrentStep(): number{
    return this.stepValue;
  }
}
