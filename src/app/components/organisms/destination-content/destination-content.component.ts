import { Component, OnInit, Output } from '@angular/core';

import { ObservableNavService } from 'src/app/observable-nav.service';

@Component({
  selector: 'destination-content',
  templateUrl: './destination-content.component.html',
  styleUrls: ['./destination-content.component.scss'],
})
export class DestinationContentComponent implements OnInit {
  planetObservable: any = 'moon';
  link: string = '';

  makeLink = () =>
    (this.link = `/assets/destination/image-${this.planetObservable}.webp`);

  constructor(private observableService: ObservableNavService) { }

  ngOnInit(): void {
    this.observableService.getPlanet().subscribe((newPlanet) => {
      this.planetObservable = newPlanet;
    });
    this.makeLink();
  }
}
