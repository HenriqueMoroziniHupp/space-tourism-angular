import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-cadastro',
  templateUrl: './debug-cadastro.component.html',
  styleUrls: ['./debug-cadastro.component.scss']
})
export class DebugCadastroComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.form[0])
  }

}
