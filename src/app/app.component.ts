import { Component } from '@angular/core';
import { BetfairService } from './api/betfair.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private betfairService: BetfairService) { 
      this.betfairService.list().subscribe(data => {
          console.log(data);
      });
  }
}
