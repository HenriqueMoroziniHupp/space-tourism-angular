import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import { CadastroRoutingModule } from './cadastro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro.component';
import { DebugCadastroComponent } from '../debug-cadastro/debug-cadastro.component';



@NgModule({
  declarations: [ CadastroComponent, DebugCadastroComponent
 ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CadastroRoutingModule,
    FormsModule,

  ]
})
export class CadastroModule { }
