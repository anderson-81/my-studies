// Refatorando...

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PeopleGuard } from './guards/people.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { VeiculesGuard } from './veicules/veicules.guard';
// import { PeopleModule } from './people/people.module';
// import { VeiculesModule } from './veicules/veicules.module';

// import { ModuleWithProviders } from '@angular/core';

// import { PersonDetailsComponent } from './people/person-details/person-details.component';
// import { PersonNotfoundComponent } from './people/person-notfound/person-notfound.component';

// As rotas são compostas por objetos.
// Os paths devem estar sem barras '/'
export const appRoutes: Routes = [
    // canActivate: [AuthGuard] => So vao acessar se logado.
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'people', component: PeopleComponent },
    // { path: 'notfound', component: PersonNotfoundComponent },
    // { path: 'person/:id', component: PersonDetailsComponent },

    // Aqui, são módulos que serão carregados sob demanda (lazy loading):
    // Comentar no app.routing.module.ts e deixar vazio o nome da rota principal. ''
    // tslint:disable-next-line:max-line-length
    { path: 'people', loadChildren: './people/people.module#PeopleModule', canActivate: [AuthGuard], canActivateChild: [PeopleGuard], canLoad: [AuthGuard] },
    // tslint:disable-next-line:max-line-length
    { path: 'veicules', loadChildren: './veicules/veicules.module#VeiculesModule', canActivate: [AuthGuard], canLoad: [AuthGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Renderizando o PageNotFound.
    { path: '**', component: PagenotfoundComponent }
];

// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
// Precisa ser importado (imports:[]) pelo módulo que o utilizara.

// RESULTADO DA REFATORAÇÃO DO MODULO DE ROTAS:

@NgModule({
    //  imports: [RouterModule.forRoot(appRoutes)],

    // Trabalhando com Hash:
    // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

// Ao trabalhar com módulos, posso praticamente copiar tudo do
// 'app.routing.ts'.

// Trabalhando com LAZY LOADING, aqui é onde serão feitas as modificações para trabalhar
// com carregamento sob demanda da aplicação.
