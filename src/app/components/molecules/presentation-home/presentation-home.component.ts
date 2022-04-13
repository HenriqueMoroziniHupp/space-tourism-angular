import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'presentation-home',
  templateUrl: './presentation-home.component.html',
  styleUrls: ['./presentation-home.component.scss']
})
export class PresentationHomeComponent implements OnInit {

  @Input() topTitle: string = ''
  @Input() mainTitle: string = ''
  @Input() description: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
