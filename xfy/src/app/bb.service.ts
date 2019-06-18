import { Injectable } from '@angular/core';
import { BB } from './model'
import { BBData } from './mock-bb'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BbService {

  constructor() { }

  getBBData(): Observable<BB[]> {
    return of(BBData)
  }
}
