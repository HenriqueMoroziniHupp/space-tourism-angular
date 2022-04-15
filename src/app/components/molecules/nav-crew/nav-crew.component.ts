import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-crew',
  templateUrl: './nav-crew.component.html',
  styleUrls: ['./nav-crew.component.scss']
})
export class NavCrewComponent implements OnInit {
    crew: string = '';

    onSaveCrew = () => localStorage.setItem('onCrew', this.crew);

  constructor() { }

  ngOnInit(): void {
    this.crew = 'douglas-hurley'
    this.onSaveCrew()
  }
}
