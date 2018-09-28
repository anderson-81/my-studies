// Como trabalhar como o CanActivateChild.
// Posso declarar um por módulo.

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable() // A autenticação será inserida posteriormente.
export class PeopleGuard implements CanActivateChild {

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        console.log('PEOPLE - canActivateChild');
        return true;
    }
    // Preciso declarar no provider do "app.module.ts".
}
