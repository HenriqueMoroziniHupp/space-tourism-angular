import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DestinationContentComponent } from '../organisms/destination-content/destination-content.component';
// import { MoonComponent } from '../organisms/destination-content/moon/moon.component';
// import { ExploreButtonComponent } from './explore-button/explore-button.component';

const routes: Routes = [
  // { path: 'destination', component: DestinationContentComponent, children: [
  //   { path: 'moon', component: MoonComponent },
  //   { path: 'mars', component: MoonComponent },
  //   { path: 'europa', component: ExploreButtonComponent },
  //   { path: 'titan', component: MoonComponent },
  // ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoleculesRoutingModule { }
