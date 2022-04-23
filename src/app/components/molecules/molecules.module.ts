import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AtomsModule } from '../atoms/atoms.module';
import { ExploreButtonComponent } from './explore-button/explore-button.component';
import { PresentationHomeComponent } from './presentation-home/presentation-home.component';
import { PresentationPlanetComponent } from './presentation-planet/presentation-planet.component';
import { NavPlanetComponent } from './nav-planet/nav-planet.component';
import { PresentationCrewComponent } from './presentation-crew/presentation-crew.component';
import { NavCrewComponent } from './nav-crew/nav-crew.component';
import { MoleculesRoutingModule } from './molecules-routing.module';

@NgModule({
  declarations: [
    NavBarComponent,
    ExploreButtonComponent,
    PresentationHomeComponent,
    PresentationPlanetComponent,
    NavPlanetComponent,
    PresentationCrewComponent,
    NavCrewComponent,
  ],
  imports: [
    CommonModule, 
    AtomsModule,
    MoleculesRoutingModule,
    RouterModule,
  ],
  exports: [
    NavBarComponent,
    ExploreButtonComponent,
    PresentationHomeComponent,
    PresentationPlanetComponent,
    NavPlanetComponent,
    PresentationCrewComponent,
    NavCrewComponent,
  ],
})
export class MoleculesModule {}
