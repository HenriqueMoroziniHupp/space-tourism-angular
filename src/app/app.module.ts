import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavItemComponent } from './components/atoms/nav-item/nav-item.component';
// import { InfoPageComponent } from './components/atoms/info-page/info-page.component';

// import { NavBarComponent } from './components/molecules/nav-bar/nav-bar.component';
// import { ExploreButtonComponent } from './components/molecules/explore-button/explore-button.component';
// import { PresentationHomeComponent } from './components/molecules/presentation-home/presentation-home.component';
// import { PresentationPlanetComponent } from './components/molecules/presentation-planet/presentation-planet.component';
// import { NavPlanetComponent } from './components/molecules/nav-planet/nav-planet.component';
// import { PresentationCrewComponent } from './components/molecules/presentation-crew/presentation-crew.component';
// import { NavCrewComponent } from './components/molecules/nav-crew/nav-crew.component';

// import { OrganismNavBarComponent } from './components/organisms/organism-nav-bar/organism-nav-bar.component';
// import { HomeContentComponent } from './components/organisms/home-content/home-content.component';
// import { DestinationContentComponent } from './components/organisms/destination-content/destination-content.component';
// import { CrewContentComponent } from './components/organisms/crew-content/crew-content.component';

// import { DesktopTemplateComponent } from './components/templates/desktop-template/desktop-template.component';

import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { OrganismsModule } from './components/organisms/organisms.module';
import { TemplatesModule } from './components/templates/templates.module';

@NgModule({
  declarations: [
    AppComponent,
    // NavItemComponent,
    // InfoPageComponent,

    // NavBarComponent,
    // ExploreButtonComponent,
    // PresentationHomeComponent,
    // PresentationPlanetComponent,
    // NavPlanetComponent,
    // PresentationCrewComponent,
    // NavCrewComponent,

    // OrganismNavBarComponent,
    // HomeContentComponent,
    // DestinationContentComponent,
    // CrewContentComponent,

    // DesktopTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    // NavItemComponent,
    // InfoPageComponent,

    // NavBarComponent,
    // ExploreButtonComponent,
    // PresentationHomeComponent,
    // PresentationPlanetComponent,
    // NavPlanetComponent,
    // PresentationCrewComponent,
    // NavCrewComponent,

    // OrganismNavBarComponent,
    // HomeContentComponent,
    // DestinationContentComponent,
    // CrewContentComponent,

    // DesktopTemplateComponent,
  ],
})
export class AppModule {}
