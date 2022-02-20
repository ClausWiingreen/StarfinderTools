import { Injectable } from '@angular/core';
import { AbstractEntityService } from '../AbstractEntityService';
import { Name } from './name';
import { NAMES } from './names';

@Injectable({
  providedIn: 'root'
})
export class NameServiceService extends AbstractEntityService<Name> {
  constructor() {
    super();
  }
  
  protected getAllEntities(): Name[] {
    return NAMES;
  }

  getRandomName() : Name {
    return this.getRandomEntity(name => name.weight);
  }
}
