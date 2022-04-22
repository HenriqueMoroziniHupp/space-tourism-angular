import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { NavItemComponent } from './nav-item/nav-item.component';
import { InfoPageComponent } from './info-page/info-page.component';



@NgModule({
  declarations: [
    NavItemComponent,
    InfoPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  providers: [],
  exports: [
    NavItemComponent,
    InfoPageComponent
  ]
})
export class AtomsModule { }
