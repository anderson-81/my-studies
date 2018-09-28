import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculesComponent } from './veicules.component';
import { VeiculesDetailsComponent } from './veicules-details/veicules-details.component';
import { VeiculesFormsComponent } from './veicules-forms/veicules-forms.component';
// Tava como global. Coloquei no escopo do módulo.
import { VeiculesGuard } from './veicules.guard';
import { VeiculesDeactivateGuard } from '../guards/veicules-deactivate.guard';
import { VeiculesDetailsResolver } from './guards/veicules-details.resolver';
/*
// Hard code e avaliado primeiro nas rotas:
export const veiculesRoutes: Routes = [
    { path: 'veicules', component: VeiculesComponent },
    { path: 'veicules/new', component: VeiculesFormsComponent },
    { path: 'veicules/:id', component: VeiculesDetailsComponent },
    { path: 'veicules/:id/edit', component: VeiculesFormsComponent }
];
*/

// Modificando para ter rotas filhas:
export const veiculesRoutes: Routes = [
    {
        path: '', component: VeiculesComponent
    },
    {
        path: 'veicule', children: [
            { path: 'new', component: VeiculesFormsComponent }, // Os dados que quero carregar antes do componente ser carregado.
            { path: ':id', component: VeiculesDetailsComponent, resolve: { veicule: VeiculesDetailsResolver } },
            { path: ':id/edit', component: VeiculesFormsComponent, canDeactivate: [VeiculesDeactivateGuard] }
        ], canActivateChild: [VeiculesGuard]
    },
];
// Depois, colocar o router-outlet no html do componente principal.
// Conceito de Master-Details;

@NgModule({
    imports: [RouterModule.forChild(veiculesRoutes)],
    exports: [RouterModule]
})
export class VeiculesRoutingModule { }
