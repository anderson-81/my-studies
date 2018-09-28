// Criou o componente, crie logo o modulo com <NOME>.module.ts;

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculesComponent } from './veicules.component';
import { VeiculesDetailsComponent } from './veicules-details/veicules-details.component';
import { VeiculesFormsComponent } from './veicules-forms/veicules-forms.component';
import { VeiculesRoutingModule } from './veicules.routing.module';
import { VeiculesService } from './veicules.service';
import { FormsModule } from '@angular/forms';
import { VeiculesGuard } from './veicules.guard';
import { VeiculesDeactivateGuard } from '../guards/veicules-deactivate.guard';
import { VeiculesDetailsResolver } from './guards/veicules-details.resolver';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VeiculesRoutingModule // Apontando para o modulo de rotas.
    ],
    // Apontando para os componentes no módulo:
    declarations: [VeiculesComponent, VeiculesDetailsComponent, VeiculesFormsComponent],
    providers: [VeiculesService, VeiculesGuard, VeiculesDeactivateGuard, VeiculesDetailsResolver]
})
export class VeiculesModule { }
