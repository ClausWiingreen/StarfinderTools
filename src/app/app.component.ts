import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Router, Route, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Starfinder Tools';
  faGithub = faGithub as IconProp;

  constructor(public router: Router) {
  }

  nameLookup(route: Route) : string {
    const path = route.path;
    if(!path) return "undefined";
    switch(path){
      case "background": return "Character Background Generator";
      case "character": return "Character Generator";
    }
    return path;
  }
}
