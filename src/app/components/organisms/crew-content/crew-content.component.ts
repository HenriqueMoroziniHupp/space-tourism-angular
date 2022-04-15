import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crew-content',
  templateUrl: './crew-content.component.html',
  styleUrls: ['./crew-content.component.scss'],
})
export class CrewContentComponent implements OnInit {
  localCrew: any = '';

  onLoadCrew = () => (this.localCrew = localStorage.getItem('onCrew'));

  constructor() {}

  ngOnInit(): void {}
}
