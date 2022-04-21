import { Component, OnInit } from '@angular/core';

import { ObservableNavService } from 'src/app/observable-nav.service';

@Component({
  selector: 'nav-planet',
  templateUrl: './nav-planet.component.html',
  styleUrls: ['./nav-planet.component.scss'],
})
export class NavPlanetComponent implements OnInit {
  planetObservable: string = 'europa';

  constructor(private observableService: ObservableNavService) {
    this.observableService.getPlanet().subscribe((newPlanet) => {
      this.planetObservable = newPlanet;
    });
  }

  setObservablePlanet = (planet: string) => {
    this.observableService.setPlanet(planet);
  };

  ngOnInit(): void {
    this.planetObservable =  'europa'
  }
}
