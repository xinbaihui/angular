import { Injectable } from '@angular/core';
import { BB } from './model'
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { httpClientInMemBackendServiceFactory } from 'angular-in-memory-web-api';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BbService {
  private bbUrl = 'api/bbs'

  constructor(private http: HttpClient) {}

  getBBData(): Observable<BB[]> {
    return this.http.get<BB[]>(this.bbUrl)
  }
}
