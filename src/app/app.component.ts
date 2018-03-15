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
  private marketIds;

  constructor(private betfairService: BetfairService) { 
  }

  showMatches() {
    this.betfairService.listMarketIds().subscribe(data => {
      this.marketIds = data.map(x => x.marketId);
      data.forEach(function(val) { 
        this.events[val.marketId] = {name: val.event.name};
      }, this);
    });
  }

  listOdds() {
    this.betfairService.listOdds(this.marketIds).subscribe(data => {
      data.forEach(function(val) { 
        this.events[val.marketId].firstOdds = this.convertOddsToPercentage(val.runners[0].lastPriceTraded);
        this.events[val.marketId].secondOdds = this.convertOddsToPercentage(val.runners[1].lastPriceTraded);
      }, this);
    });
  }

  convertOddsToPercentage(line) {
    return (1/line*100).toFixed(2);
  }
}
