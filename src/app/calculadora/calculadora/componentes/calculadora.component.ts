import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string = '0';
  private numero2: string = '0';
  private resultado: Number = 0;
  private operacao: string = '0';

  constructor(private calculadoraservices: CalculadoraService) {

  }

  ngOnInit() {
    this.limpar();
      
      }

      limpar(){
        this.numero1 = '0';
        this.numero2= '0';
        this.resultado = 0 ;
        this.operacao = '0';

    }
    adicionarNumero(numero:string):void{
      if(this.operacao === '0'){
        this.numero1 = this.concatenarNumero(this.numero1, numero);

      }else{
        this.numero2 = this.concatenarNumero(this.numero2, numero);
      }


      }


      concatenarNumero(numAtual:string, numConcat:string){
        if(numAtual === '0'|| numAtual===null) {
          numAtual = '';

        }
        if(numConcat === '.' && numAtual ==='.'){
          return numAtual;
        }
        if(numConcat ==='.' && numAtual.indexOf('.') >-1 ){
          return numAtual;
        } 
        return numAtual + numConcat;
    }
    definirOperacao(operacao: string): void {
      if (this.operacao !== '0' && this.numero2 !== '0') {
        this.resultado = this.calculadoraservices.calcular(
          parseFloat(this.numero1),
          parseFloat(this.numero2),
          this.operacao
        );
        this.numero1 = this.resultado.toString();
        this.numero2 = '0';
        this.resultado = 0;
      }
      this.operacao = operacao;
    }

    
    calcular(): void{
      if(this.numero2 === '0'){
        return;
      }
      
      this.resultado = this.calculadoraservices.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);
      
      }
    get display(): string{
      if (this.resultado !== 0){
        return this.resultado.toString();
      }
      if(this.numero2 !== '0'){
        return this.numero2;
      }
      return this.numero1;
    }
    
}
