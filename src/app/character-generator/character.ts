import { Name } from './name';
import { NpcQuirk } from './npc-quirk';
import { Race } from './race';

export interface Character {
    name: Name;
    race: Race;
    quirk: NpcQuirk;
}
