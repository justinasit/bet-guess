import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class BetfairService {
  constructor(private http: HttpClient){}

  private headers = new HttpHeaders({
      'X-Application': environment.betfair_app_key,
      'X-Authentication': environment.betfair_session_key,
      'Content-Type': 'application/json',
  });

  private listMarketIdsEndpoint = 'listMarketCatalogue/';
  private listOddsEndpoint = 'listMarketBook/';

  listMarketIds() {
    return this.http.post<{marketId, event}[]>(environment.api_url + this.listMarketIdsEndpoint, {filter: {
        "competitionIds": [10547864],
        "marketTypeCodes": ['MATCH_ODDS']
    }, "maxResults": "20", "marketProjection": ["EVENT"]},
    {headers: this.headers});
  }

  listOdds(marketIds) {
    return this.http.post<{marketId, runners}[]>(environment.api_url + this.listOddsEndpoint, {
        "marketIds": marketIds
    },
    {headers: this.headers});
  }
}
