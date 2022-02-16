import { HomeWorld } from "./home-world";
import { InfluentialAssociate } from "./influential-associate";
import { MajorEvent } from "./major-event";
import { PartyRelationship } from "./party-relationship";

export interface Background{
  homeWorld : HomeWorld;
  majorEvent : MajorEvent;
  influentialAssociate: InfluentialAssociate;
  partyRelationship: PartyRelationship;
}
