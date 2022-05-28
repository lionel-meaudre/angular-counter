import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-up',
  templateUrl: './up.component.html',
  styleUrls: ['./up.component.css']
})
export class UpComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  step : number = this.counterService.getCurrentStep();

  ngOnInit(): void {
  }

  increase(): void{
    this.counterService.increase();
    this.step = this.counterService.getCurrentStep();
  }
}
