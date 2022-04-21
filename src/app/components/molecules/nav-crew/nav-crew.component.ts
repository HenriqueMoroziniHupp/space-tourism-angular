import { Component, OnInit } from '@angular/core';

import { ObservableNavService } from 'src/app/observable-nav.service';

@Component({
  selector: 'nav-crew',
  templateUrl: './nav-crew.component.html',
  styleUrls: ['./nav-crew.component.scss'],
})
export class NavCrewComponent implements OnInit {
  crewObservable: string = '';

  constructor(private observableService: ObservableNavService) {
    this.observableService.getCrew().subscribe((newCrew) => {
      this.crewObservable = newCrew;
    });
  }

  setObservableCrew = (crew: string) => this.observableService.setCrew(crew);

  ngOnInit(): void {}
}
