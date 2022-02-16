import { Injectable } from '@angular/core';
import { MajorEvent } from './major-event';
import { MAJOREVENTS } from './major-events';
import { binarySearch } from './binarySearch';

@Injectable({
  providedIn: 'root'
})
export class MajorEventService {

  constructor() { }

  getMajorEvents(): MajorEvent[] { return MAJOREVENTS; }
  getRandomMajorEvent(): MajorEvent {
    return binarySearch(MAJOREVENTS, Math.random()*100, event => event.weight);
  }
}
