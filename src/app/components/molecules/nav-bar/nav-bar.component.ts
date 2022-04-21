import { Component, OnInit } from '@angular/core';

import { ObservableNavService } from 'src/app/observable-nav.service';
@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  pageObservable: string = 'home';

  constructor(private observableService: ObservableNavService) {
    this.observableService.getPage().subscribe((newPage) => {
      this.pageObservable = newPage;
    });
  }

  setObservablePage = (page: string) => this.observableService.setPage(page);

  ngOnInit(): void {}
}
