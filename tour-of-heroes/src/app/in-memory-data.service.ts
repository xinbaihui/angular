import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Emma' },
      { id: 2, name: 'Ava' },
      { id: 3, name: 'Mia' },
      { id: 4, name: 'Abigail' },
      { id: 5, name: 'Alexis' },
      { id: 6, name: 'Emily' },
      { id: 7, name: 'Amy' },
      { id: 8, name: 'Lily' },
      { id: 9, name: 'Sophia' },
      { id: 10, name: 'Anna' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // for add hero
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}