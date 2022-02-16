import { Injectable } from '@angular/core';
import { InfluentialAssociate } from './influential-associate';
import { INFLUENTIALASSOCIATES } from './influential-associates';

@Injectable({
  providedIn: 'root'
})
export class InfluentialAssociateService {

  constructor() { }

  getInfluentialAssociates() : InfluentialAssociate[] {
    return INFLUENTIALASSOCIATES;
  }

  getRandomInfluentialAssociate() : InfluentialAssociate {
    return INFLUENTIALASSOCIATES[Math.floor(Math.random()*INFLUENTIALASSOCIATES.length)];
  }
}
