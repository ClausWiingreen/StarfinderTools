import { Injectable } from '@angular/core';
import { AbstractEntityService } from '../AbstractEntityService';
import { NpcQuirk } from './npc-quirk';
import { NPCQUIRKS } from './npc-quirks';

@Injectable({
  providedIn: 'root'
})
export class NpcQuirkServiceService extends AbstractEntityService<NpcQuirk> {
  constructor() {
    super();
  }

  protected getAllEntities(): NpcQuirk[] {
    return NPCQUIRKS;
  }

  getRandomNpcQuirk(): NpcQuirk {
    return this.getRandomEntity(quirk => quirk.weight);
  }
}
