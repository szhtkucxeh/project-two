import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LetmeService {

  constructor(private httpClient: HttpClient) { }

 get(a:string): Observable<any> {
  return this.httpClient.get(`https://api.coingecko.com/api/v3/coins/${a}`)
  }


}