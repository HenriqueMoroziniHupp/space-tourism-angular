import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewContentComponent } from './components/organisms/crew-content/crew-content.component';
import { DestinationContentComponent } from './components/organisms/destination-content/destination-content.component';
import { HomeContentComponent } from './components/organisms/home-content/home-content.component';
import { DesktopTemplateComponent } from './components/templates/desktop-template/desktop-template.component';

const routes: Routes = [
  { path: 'home', component: HomeContentComponent },
  { path: 'destination', component: DestinationContentComponent },
  { path: 'crew', component: CrewContentComponent },
  // { path: 'technology', component: }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
