import { Component, OnInit, ViewChild } from '@angular/core';
import { Background } from './background';
import { HomeWorldService } from './home-world.service';
import { InfluentialAssociateService } from './influential-associate.service';
import { MajorEventService } from './major-event.service';
import { PartyRelationshipService } from './party-relationship.service';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {
  faLock = faLock;
  faLockOpen = faLockOpen;
  background : Background = this.generateRandom()
  homeWorldLock = false;
  majorEventLock = false;
  influentialAssociateLock = false;
  partyRelationshipLock = false;
  @ViewChild(MatAccordion) accordion?: MatAccordion;

  constructor(
    private homeWorldService: HomeWorldService, 
    private majorEventService: MajorEventService,
    private influentialAssociateService: InfluentialAssociateService,
    private partyRelationshipService: PartyRelationshipService) { }

  ngOnInit(): void {
  }

  generateRandom(): Background {
    var background : Background = {
      homeWorld: this.homeWorldLock ? this.background.homeWorld : this.homeWorldService.getRandomHomeWorld(),
      majorEvent: this.majorEventLock ? this.background.majorEvent : this.majorEventService.getRandomMajorEvent(),
      influentialAssociate: this.influentialAssociateLock ? this.background.influentialAssociate : this.influentialAssociateService.getRandomInfluentialAssociate(),
      partyRelationship: this.partyRelationshipLock ? this.background.partyRelationship : this.partyRelationshipService.getRandomPartyRelationship()
    };
    
    return background;
  }

  togglePartyRelationshipLock():void{
    this.partyRelationshipLock = !this.partyRelationshipLock;
  }
}
