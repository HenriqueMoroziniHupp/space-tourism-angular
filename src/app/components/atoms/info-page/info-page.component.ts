import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss']
})
export class InfoPageComponent implements OnInit {

  @Input() numberPage: string = '';
  @Input() infoPage: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
