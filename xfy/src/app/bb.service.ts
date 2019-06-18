import { Injectable } from '@angular/core';
import { BB } from './model'
import { BBData } from './mock-bb'

@Injectable({
  providedIn: 'root'
})
export class BbService {

  constructor() { }

  getBBData(): BB[] {
    return BBData
  }
}
