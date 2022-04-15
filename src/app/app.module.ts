import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './components/atoms/nav-item/nav-item.component';
import { NavBarComponent } from './components/molecules/nav-bar/nav-bar.component';
import { OrganismNavBarComponent } from './components/organisms/organism-nav-bar/organism-nav-bar.component';
import { ExploreButtonComponent } from './components/molecules/explore-button/explore-button.component';
import { PresentationHomeComponent } from './components/molecules/presentation-home/presentation-home.component';
import { DesktopTemplateComponent } from './components/templates/desktop-template/desktop-template.component';
import { HomeContentComponent } from './components/organisms/home-content/home-content.component';
import { PresentationPlanetComponent } from './components/molecules/presentation-planet/presentation-planet.component';
import { NavPlanetComponent } from './components/molecules/nav-planet/nav-planet.component';
import { DestinationContentComponent } from './components/organisms/destination-content/destination-content.component';
import { InfoPageComponent } from './components/atoms/info-page/info-page.component';
import { PresentationCrewComponent } from './components/molecules/presentation-crew/presentation-crew.component';
import { CrewContentComponent } from './components/organisms/crew-content/crew-content.component';
import { NavCrewComponent } from './components/molecules/nav-crew/nav-crew.component';


@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    NavBarComponent,
    OrganismNavBarComponent,
    ExploreButtonComponent,
    PresentationHomeComponent,
    DesktopTemplateComponent,
    HomeContentComponent,
    PresentationPlanetComponent,
    NavPlanetComponent,
    DestinationContentComponent,
    InfoPageComponent,
    PresentationCrewComponent,
    CrewContentComponent,
    NavCrewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavItemComponent,
    NavBarComponent,
    OrganismNavBarComponent,
    ExploreButtonComponent,
    PresentationHomeComponent,
    DesktopTemplateComponent,
    HomeContentComponent,
    PresentationPlanetComponent,
    NavPlanetComponent,
    InfoPageComponent,
    PresentationCrewComponent,
    CrewContentComponent,
    NavCrewComponent
  ]
})
export class AppModule { }
