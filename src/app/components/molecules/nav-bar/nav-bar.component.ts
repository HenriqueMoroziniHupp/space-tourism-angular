import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  page: string = '';

  onSavePage = () => {
    localStorage.setItem('onPage', this.page);
  }

  constructor() {}
  
  ngOnInit(): void {
    this.page = 'home'
    this.onSavePage();
  }

}
