import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'presentation-planet',
  templateUrl: './presentation-planet.component.html',
  styleUrls: ['./presentation-planet.component.scss'],
})
export class PresentationPlanetComponent implements OnInit {
  @Input() planetName: string = '';
  @Input() description: string = '';
  @Input() distance: string = '';
  @Input() time: string = '';

  constructor() {}

  ngOnInit(): void {}
}
