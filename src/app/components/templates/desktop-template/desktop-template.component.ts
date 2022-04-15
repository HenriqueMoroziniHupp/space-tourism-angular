import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'desktop-template',
  templateUrl: './desktop-template.component.html',
  styleUrls: ['./desktop-template.component.scss'],
})
export class DesktopTemplateComponent implements OnInit {
  localPage: any = '';

  onLoadPage = () => (this.localPage = localStorage.getItem('onPage'));

  constructor() {}

  ngOnInit(): void {}
}
