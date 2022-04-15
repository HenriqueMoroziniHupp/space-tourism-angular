import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'presentation-crew',
  templateUrl: './presentation-crew.component.html',
  styleUrls: ['./presentation-crew.component.scss']
})
export class PresentationCrewComponent implements OnInit {
  @Input() profession: string = '';
  @Input() name: string = '';
  @Input() description: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
