import { Injectable } from '@angular/core';
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
    return PARTYRELATIONSHIPS[Math.floor(Math.random()*PARTYRELATIONSHIPS.length)];
  }
}
