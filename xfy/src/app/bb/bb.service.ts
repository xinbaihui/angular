import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BB } from '../model'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BbService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getBBData(): Observable<BB[]> {
    return this.http.get<BB[]>('/bb')
      .pipe(
        catchError(error => throwError(error.message))
      )
  }

  addBB(data: BB): Observable<BB> {
    return this.http.post<BB>('/bb', data, this.httpOptions)
      .pipe(
        catchError(error => throwError(error.message))
      )
  }
}
