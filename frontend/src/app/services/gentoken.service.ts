import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { invT } from '../inviteTokenClass';

@Injectable({
  providedIn: 'root'
})
export class GentokenService {
  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {  }

  addToken(tCurrent:invT)
  {
    return this.http.post(`${this.uri}/tokens/generate`,tCurrent);
  }
  getToken(token: any)
  {
    console.log(token);
    return this.http.post(this.uri +'/tokens/get', {token: token});
  }
  deleteToken(token: any)
  {
    return this.http.post(this.uri + '/tokens/delete', {token: token});
  }
}
