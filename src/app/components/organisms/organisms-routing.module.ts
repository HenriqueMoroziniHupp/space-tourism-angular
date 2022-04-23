import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationContentComponent } from './destination-content/destination-content.component';
import { EuropaComponent } from './destination-content/europa/europa.component';
import { MarsComponent } from './destination-content/mars/mars.component';
import { MoonComponent } from './destination-content/moon/moon.component';
import { TitanComponent } from './destination-content/titan/titan.component';

const routes: Routes = [
  { path: 'destination', component: DestinationContentComponent, children: [
    { path: 'moon', component: MoonComponent },
    { path: 'mars', component: MarsComponent },
    { path: 'europa', component: EuropaComponent },
    { path: 'titan', component: TitanComponent },
  ] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismsRoutingModule { }
