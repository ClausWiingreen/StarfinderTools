import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Character } from './character';
import { NameServiceService } from './name-service.service';
import { NpcQuirkServiceService } from './npc-quirk-service.service';
import { RaceServiceService } from './race-service.service';

@Component({
  selector: 'app-character-generator',
  templateUrl: './character-generator.component.html',
  styleUrls: ['./character-generator.component.css']
})
export class CharacterGeneratorComponent implements OnInit {
  @ViewChild(MatAccordion) accordion?: MatAccordion;
  character: Character = this.generateRandom();

  constructor(
    private nameService: NameServiceService,
    private raceService: RaceServiceService,
    private npcQuirService: NpcQuirkServiceService) { }

  ngOnInit(): void {
  }

  generateRandom(): Character {
    return {
      name: this.nameService.getRandomName(),
      race: this.raceService.getRandomRace(),
      quirk: this.npcQuirService.getRandomNpcQuirk()
    }
  }
}
