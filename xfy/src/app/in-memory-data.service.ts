import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { BB } from './model'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const bbs = [{
      id: 0,
      name: 'DD',
      time: '2019-06-17 09:00:00',
      address: 'home',
      quantity: 'Middle',
      difficulty: 'Middle',
      interval: 0
    }, {
      id: 1,
      name: 'DD',
      time: '2019-06-17 19:00:00',
      address: 'home',
      quantity: 'Middle',
      difficulty: 'Middle',
      interval: 0
    }]
    return { bbs }
  }

  genId(bbData: BB[]): number {
    return bbData.length > 0 ? Math.max(...bbData.map(bb => bb.id)) + 1 : 0
  }
}
