import { Injectable } from '@angular/core';
import { HOMEWORLDS } from './home-worlds';
import { HomeWorld } from './home-world';
import { binarySearch } from './binarySearch';

@Injectable({
  providedIn: 'root'
})
export class HomeWorldService {

  constructor() { }

  getHomeWorlds(): HomeWorld[] { return HOMEWORLDS; }
  getRandomHomeWorld(): HomeWorld {
    return binarySearch(HOMEWORLDS, Math.random()*100, homeWorld => homeWorld.weight);
  }
}
