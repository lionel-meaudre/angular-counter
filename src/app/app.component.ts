import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-counter';

  counter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.counter.subscribe((n) => this.counter = n);//subscribe to update local counter
  }
}

