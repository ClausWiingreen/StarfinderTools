import { Injectable } from '@angular/core';
import { AbstractEntityService } from '../AbstractEntityService';
import { Race } from './race';
import { RACES } from './races';

@Injectable({
  providedIn: 'root'
})
export class RaceServiceService extends AbstractEntityService<Race>{
  constructor() {
    super();
  }

  protected getAllEntities(): Race[] {
    return RACES;
  }

  getRandomRace(): Race {
    return this.getRandomEntity(race => race.weight);
  }
}
