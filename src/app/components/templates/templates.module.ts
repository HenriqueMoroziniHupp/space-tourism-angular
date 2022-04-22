import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { OrganismsModule } from '../organisms/organisms.module';
import { DesktopTemplateComponent } from './desktop-template/desktop-template.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    DesktopTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    OrganismsModule,
    MoleculesModule,
    AtomsModule
  ],
  exports: [
    DesktopTemplateComponent
  ]
})
export class TemplatesModule { }
