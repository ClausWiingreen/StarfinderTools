import { Injectable } from '@angular/core';
import { binarySearch } from './binarySearch';
import { PartyRelationship } from './party-relationship';
import { PARTYRELATIONSHIPS } from './party-relationships';

@Injectable({
  providedIn: 'root'
})
export class PartyRelationshipService {

  constructor() { }

  getPartyRelationships() : PartyRelationship[]{
    return PARTYRELATIONSHIPS;
  }
  getRandomPartyRelationship(): PartyRelationship {
    return binarySearch(PARTYRELATIONSHIPS, Math.random()*100, relationship => relationship.weight);
  }
}
