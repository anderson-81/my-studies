import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Veicule } from '../veicule';
import { VeiculesService } from '../veicules.service';

// Trabalhando com Resolver aqui:
// Permite carregar os dados antes do componente ser criado.
// Resolverá uma entidade, exemplo: Veicule (criado no lugar do any simples e refatorado).
@Injectable()
export class VeiculesDetailsResolver implements Resolve<Veicule> {

  // Coloco o serviço de Veicule
  constructor(private _veiculesService: VeiculesService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this._veiculesService.getVeiculeByID(route.params['id']);
  }
}
