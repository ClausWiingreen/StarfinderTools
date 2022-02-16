import { Injectable } from '@angular/core';
import { binarySearch } from './binarySearch';
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
    return binarySearch(INFLUENTIALASSOCIATES, Math.random()*100, associate => associate.weight);
  }
}
