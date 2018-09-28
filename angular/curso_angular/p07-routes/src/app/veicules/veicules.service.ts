import { Injectable } from '@angular/core';
import { Veicule } from './veicule';

@Injectable()
export class VeiculesService {

  private veicules: Veicule[] = [
    { id: 1, model: 'Santana' },
    { id: 2, model: 'Voyage' },
    { id: 3, model: 'Fusca' },
    { id: 4, model: 'Brasilia' },
    { id: 5, model: 'Uno' },
    { id: 6, model: 'Opala' },
    { id: 7, model: 'Fiat 147' }
  ];

  constructor() { }

  getVeicules() {
    return this.veicules;
  }

  getVeiculeByID(_id: number) {
    const veicules = this.getVeicules();
    for (let i = 0; i < veicules.length; i++) {
      if (_id === veicules[i].id) {
        console.log(veicules[i]);
        return veicules[i];
      }
    }
    return null;
  }
}
