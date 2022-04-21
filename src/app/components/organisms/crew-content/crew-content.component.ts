import { Component, OnInit } from '@angular/core';

import { ObservableNavService } from 'src/app/observable-nav.service';

@Component({
  selector: 'crew-content',
  templateUrl: './crew-content.component.html',
  styleUrls: ['./crew-content.component.scss'],
})
export class CrewContentComponent implements OnInit {
  crewObservable: string = 'douglas-hurley';
  link: string = '';

  constructor(private observableService: ObservableNavService) {
    this.observableService.getCrew().subscribe((newCrew) => {
      this.crewObservable = newCrew;
    });
  }

  makeLink = () =>
    (this.link = `/assets/crew/image-${this.crewObservable}.webp`);

  ngOnInit(): void {
    this.makeLink();
  }
}
