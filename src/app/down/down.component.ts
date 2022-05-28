import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-down',
  templateUrl: './down.component.html',
  styleUrls: ['./down.component.css']
})
export class DownComponent implements OnInit {

  constructor(private counterService: CounterService) { }

  step : number = this.counterService.getCurrentStep();


  ngOnInit(): void {
  }

  decrease(): void{
    this.counterService.decrease();
    this.step = this.counterService.getCurrentStep();
  }

}
