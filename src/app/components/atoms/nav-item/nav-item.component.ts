import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() router: string = '#'
  @Input() text: string = ''
  @Input() number: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
