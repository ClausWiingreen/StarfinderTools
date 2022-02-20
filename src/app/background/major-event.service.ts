import { Injectable } from '@angular/core';
import { MajorEvent } from './major-event';
import { MAJOREVENTS } from './major-events';
import { AbstractEntityService } from './AbstractEntityService';

@Injectable({
  providedIn: 'root'
})
export class MajorEventService extends AbstractEntityService<MajorEvent> {
  constructor() {
    super();
  }
  
  protected getAllEntities(): MajorEvent[] {
    return MAJOREVENTS;
  }

  getRandomMajorEvent(): MajorEvent {
    return this.getRandomEntity(event => event.weight);
  }
}
