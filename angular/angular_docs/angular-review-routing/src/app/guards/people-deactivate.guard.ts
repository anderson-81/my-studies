import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PeopleFormsComponent } from '../people/people-forms/people-forms.component';
import { Observable } from 'rxjs';
import { IFormDeactivate } from './iFormDeactivate.guard';

@Injectable()
// export class PeopleDeactivateGuard implements CanDeactivate<PeopleFormsComponent> {
export class PeopleDeactivateGuard implements CanDeactivate<IFormDeactivate> {
    canDeactivate(
        component: IFormDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        // Accessing component's attribute:
        // if (component.changeForms) {
        //     return confirm('Do you want exit and lose the datas on form?');
        // }
        // return true;
        if (component.CanDeactivateForm()) {
            return confirm('Do you want exit and lose the datas on form?');
        }
    }
}
