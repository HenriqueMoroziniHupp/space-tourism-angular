import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismNavBarComponent } from './organism-nav-bar/organism-nav-bar.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { DestinationContentComponent } from './destination-content/destination-content.component';
import { CrewContentComponent } from './crew-content/crew-content.component';

@NgModule({
  declarations: [
    OrganismNavBarComponent,
    HomeContentComponent,
    DestinationContentComponent,
    CrewContentComponent
  ],
  imports: [CommonModule, RouterModule, MoleculesModule, AtomsModule],
  exports: [
    OrganismNavBarComponent,
    HomeContentComponent,
    DestinationContentComponent,
    CrewContentComponent
  ],
})
export class OrganismsModule {}
