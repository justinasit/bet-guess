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

  private listEventTypesEndpoint = 'listEventTypes/';

  list() {
    return this.http.post(environment.api_url + this.listEventTypesEndpoint, {filter: {}},
        {headers: this.headers});
  }
}
