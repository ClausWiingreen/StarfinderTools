import { Injectable } from '@angular/core';
import { AbstractEntityService } from '../AbstractEntityService';
import { InfluentialAssociate } from './influential-associate';
import { INFLUENTIALASSOCIATES } from './influential-associates';

@Injectable({
  providedIn: 'root'
})
export class InfluentialAssociateService extends AbstractEntityService<InfluentialAssociate> {
  constructor() {
    super();
  }

  protected getAllEntities(): InfluentialAssociate[] {
    return INFLUENTIALASSOCIATES;
  }

  getRandomInfluentialAssociate(): InfluentialAssociate {
    return this.getRandomEntity(associate => associate.weight);
  }
}
