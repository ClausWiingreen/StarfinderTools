import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackgroundComponent } from './background/background.component';
import { CharacterGeneratorComponent } from './character-generator/character-generator.component';

const routes: Routes = [
  { path: 'background', component: BackgroundComponent },
  { path: 'character', component: CharacterGeneratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
