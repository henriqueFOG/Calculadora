import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraService } from './services/calculadora.service';
import { CalculadoraComponent } from './calculadora/componentes/calculadora.component';

@NgModule({
  exports:[
    CalculadoraComponent
  ],

  declarations: [
    CalculadoraComponent

  ],

  imports: [
    CommonModule
  ],
  providers:[
    CalculadoraService
  ]
})
export class CalculadoraModule { }
