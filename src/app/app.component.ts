import { Component } from '@angular/core';
import { BetfairService } from './api/betfair.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events : {name}[] = [];
  object_values = Object.values;

  constructor(private betfairService: BetfairService) { 
      this.betfairService.listMarketIds().subscribe(data => {
          let marketIds = data.map(x => x.marketId);
          data.forEach(function(val) { 
              this.events[val.marketId] = {name: val.event.name};
          }, this);
          this.betfairService.listOdds(marketIds).subscribe(data => {
              data.forEach(function(val) { 
                  this.events[val.marketId].firstOdds = val.runners[0].lastPriceTraded;
                  this.events[val.marketId].secondOdds = val.runners[1].lastPriceTraded;
              }, this);
          });
      });
  }
}
