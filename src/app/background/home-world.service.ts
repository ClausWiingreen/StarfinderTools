import { Injectable } from '@angular/core';
import { HOMEWORLDS } from './home-worlds';
import { HomeWorld } from './home-world';
import { AbstractEntityService } from '../AbstractEntityService';

@Injectable({
  providedIn: 'root'
})
export class HomeWorldService extends AbstractEntityService<HomeWorld>{
  constructor() { 
    super();
  }

  protected getAllEntities(): HomeWorld[] { 
    return HOMEWORLDS; 
  }

  getRandomHomeWorld(): HomeWorld {
    return this.getRandomEntity(world => world.weight);
  }
}
