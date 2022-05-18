import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewContentComponent } from './components/organisms/crew-content/crew-content.component';
import { DestinationContentComponent } from './components/organisms/destination-content/destination-content.component';
import { HomeContentComponent } from './components/organisms/home-content/home-content.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'destination', component: DestinationContentComponent },
  { path: 'crew', component: CrewContentComponent },
  { path: '', component: HomeContentComponent },
  { path: '**', component: ErrorComponent },


  // { path: '', component: HomeContentComponent },
  // { path: 'destination', loadChildren: 'app/components/organisms/organisms.module#OrganismsModule' },
  // { path: 'home', loadChildren: 'app/components/templates/templates.module#TemplatesModule' },
  // { path: 'destination', component: DestinationContentComponent },
  // { path: 'crew', component: CrewContentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
