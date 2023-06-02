import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('deve garantir que 1 + 4 = 5', () => {
    const soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  });

  it('deve garantir que 1 - 4 = 3', () => {
    const soma = service.calcular(4, 1, CalculadoraService.SUBTRAIR);
    expect(soma).toEqual(3);
  });

  it('deve garantir que 3 / 3 = 1', () => {
    const soma = service.calcular(3, 3, CalculadoraService.DIVISAO);
    expect(soma).toEqual(1);
  });

  it('deve garantir que 3 * 3 = 9', () => {
    const soma = service.calcular(3, 3, CalculadoraService.MULTIPLICACAO);
    expect(soma).toEqual(9);
  });

});



