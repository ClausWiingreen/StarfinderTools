import { Injectable } from '@angular/core';
import { MajorEvent } from './major-event';
import { MAJOREVENTS } from './major-events';

@Injectable({
  providedIn: 'root'
})
export class MajorEventService {

  constructor() { }

  getMajorEvents(): MajorEvent[] { return MAJOREVENTS; }
  getRandomMajorEvent(): MajorEvent {
    return MAJOREVENTS[Math.floor(Math.random()*MAJOREVENTS.length)];
  }
}
