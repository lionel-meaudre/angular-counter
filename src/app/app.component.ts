import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-counter';


  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
  }

  get counter():Observable<number> {
    return this.counterService.counter;
  }
}

