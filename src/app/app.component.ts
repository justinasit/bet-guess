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

  /**
   * Show a list of matches for the current day.
   * Store the market IDs for the future search to reveal the odds.
   * Competition is NBA by default.
   */
  showMatches(competitionId=10547864) {
    console.log(this.events);
    this.betfairService.listMarketIds(competitionId).subscribe(data => {
      this.marketIds = data.map(x => x.marketId);
      data.forEach(function(val) { 
        this.events[val.marketId] = {name: val.event.name};
      }, this);
      console.log(this.events[1.141378723]);
    });
  }

  /**
   * Get the odds of the matches from the API.
   * Store them in the events object.
   */
  listOdds() {
    this.betfairService.listOdds(this.marketIds).subscribe(data => {
      data.forEach(function(val) { 
        this.events[val.marketId].firstOdds = this.convertOddsToPercentage(val.runners[0].lastPriceTraded);
        this.events[val.marketId].secondOdds = this.convertOddsToPercentage(val.runners[1].lastPriceTraded);
      }, this);
    });
  }

  /**
   * Convert the odd lines into a human-readable percentage.
   */
  convertOddsToPercentage(line) {
    return (1/line*100).toFixed(2);
  }
}
