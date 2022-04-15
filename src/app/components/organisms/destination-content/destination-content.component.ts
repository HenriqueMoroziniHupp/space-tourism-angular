import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'destination-content',
  templateUrl: './destination-content.component.html',
  styleUrls: ['./destination-content.component.scss'],
})
export class DestinationContentComponent implements OnInit {
  planet: any = 'moon';
  link: string = '';

  makeLink = () => this.link = `/assets/destination/image-${this.planet}.webp`;

  onLoadPlanet = () => {
    this.planet = localStorage.getItem('onPlanet');
    this.makeLink();
    console.log(this.link)
  };


  constructor() {}

  ngOnInit(): void {
    this.makeLink();
    
  }
}
