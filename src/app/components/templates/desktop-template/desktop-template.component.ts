import { Component, OnInit } from '@angular/core';

import { ObservableNavService } from 'src/app/observable-nav.service';

@Component({
  selector: 'desktop-template',
  templateUrl: './desktop-template.component.html',
  styleUrls: ['./desktop-template.component.scss'],
})
export class DesktopTemplateComponent implements OnInit {
  localPage: string = '';

  constructor(private observableService: ObservableNavService) {
    this.observableService.getPage().subscribe((newPage) => {
      this.localPage = newPage;
    });
  }

  ngOnInit(): void {
    this.localPage = 'home';
  }
}
