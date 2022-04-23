import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismNavBarComponent } from './organism-nav-bar/organism-nav-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { DestinationContentComponent } from './destination-content/destination-content.component';
import { CrewContentComponent } from './crew-content/crew-content.component';
import { DouglasHurleyComponent } from './crew-content/douglas-hurley/douglas-hurley.component';
import { MoonComponent } from './destination-content/moon/moon.component';
import { OrganismsRoutingModule } from './organisms-routing.module';
import { MarsComponent } from './destination-content/mars/mars.component';
import { EuropaComponent } from './destination-content/europa/europa.component';
import { TitanComponent } from './destination-content/titan/titan.component';

@NgModule({
  declarations: [
    OrganismNavBarComponent,
    HomeContentComponent,
    DestinationContentComponent,
    CrewContentComponent,
    DouglasHurleyComponent,
    MoonComponent,
    MarsComponent,
    EuropaComponent,
    TitanComponent
  ],
  imports: [CommonModule, RouterModule, MoleculesModule, AtomsModule, OrganismsRoutingModule],
  exports: [
    OrganismNavBarComponent,
    HomeContentComponent,
    DestinationContentComponent,
    CrewContentComponent
  ],
})
export class OrganismsModule {}
