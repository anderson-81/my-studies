import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class VeiculesGuard implements CanActivateChild {
  constructor() { }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('VEICULES - CanActivateChild');
    /*
    if (state.url.includes('/edit')) {
      alert('You can\'t edit.');
      // return false;
      // Exemplo com chamada ajax:
      return Observable.of(true);
    }
    */
    return true;
  }
}
