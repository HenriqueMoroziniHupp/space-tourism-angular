import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-planet',
  templateUrl: './nav-planet.component.html',
  styleUrls: ['./nav-planet.component.scss'],
})
export class NavPlanetComponent implements OnInit {
  planet: string = '';

  onSavePlanet = () => localStorage.setItem('onPlanet', this.planet);

  constructor() {}

  ngOnInit(): void {
    this.planet = 'moon';
    this.onSavePlanet();
  }
}
