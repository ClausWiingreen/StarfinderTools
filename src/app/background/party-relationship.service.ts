import { Injectable } from '@angular/core';
import { AbstractEntityService } from './AbstractEntityService';
import { PartyRelationship } from './party-relationship';
import { PARTYRELATIONSHIPS } from './party-relationships';

@Injectable({
  providedIn: 'root'
})
export class PartyRelationshipService extends AbstractEntityService<PartyRelationship> {
  constructor() {
    super();
  }
  
  protected getAllEntities(): PartyRelationship[] {
    return PARTYRELATIONSHIPS;
  }

  getRandomPartyRelationship(): PartyRelationship {
    return this.getRandomEntity(relationship => relationship.weight);
  }
}
