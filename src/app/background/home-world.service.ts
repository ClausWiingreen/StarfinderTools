import { Injectable } from '@angular/core';
import { HOMEWORLDS } from './home-worlds';
import { HomeWorld } from './home-world';

@Injectable({
  providedIn: 'root'
})
export class HomeWorldService {

  constructor() { }

  getHomeWorlds(): HomeWorld[] { return HOMEWORLDS; }
  getRandomHomeWorld(): HomeWorld {
    return HOMEWORLDS[Math.floor(Math.random()*HOMEWORLDS.length)];
  }
}
