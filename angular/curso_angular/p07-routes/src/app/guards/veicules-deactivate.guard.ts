import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
// import { VeiculesFormsComponent } from '../veicules/veicules-forms/veicules-forms.component';
import { IFormDeactivate } from './iform-candeactivate';

@Injectable()
// Passo para o diamond<>, o componente que quero desativar.

//  export class VeiculesDeactivateGuard implements CanDeactivate<VeiculesFormsComponent> {

// Trabalhando com interfaces agora ...
export class VeiculesDeactivateGuard implements CanDeactivate<IFormDeactivate> {

    canDeactivate(
        // component: VeiculesFormsComponent,
        component: IFormDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        console.log('VEICULES - CanDeactivate');
        //  return component.canChangeRouter();
        return component.canDeactivateForm();
    }
}
