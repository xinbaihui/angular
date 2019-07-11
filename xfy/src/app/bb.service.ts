import { Injectable } from '@angular/core';
import { BB } from './model'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BbService {
  private bbUrl = 'assets/db.json'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) {}

  getBBData(): Observable<BB[]> {
    return this.http.get<BB[]>(this.bbUrl)
      .pipe(
        catchError(error => throwError(error.message))
      )
  }

  addBB(data: BB): Observable<BB> {
    return this.http.post<BB>(this.bbUrl, data, this.httpOptions)
      .pipe(
        catchError(error => throwError(error.message))
      )
  }
}
