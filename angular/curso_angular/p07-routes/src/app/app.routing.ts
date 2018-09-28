// Maneira primária de se criar rotas do projeto:

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
// import { PersonDetailsComponent } from './person-details/person-details.component';
// import { PersonNotfoundComponent } from './person-notfound/person-notfound.component';

import { PersonDetailsComponent } from './people/person-details/person-details.component';
import { PersonNotfoundComponent } from './people/person-notfound/person-notfound.component';


// As rotas são compostas por objetos.
// Os paths devem estar sem barras '/'
export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'notfound', component: PersonNotfoundComponent },
    { path: 'person/:id', component: PersonDetailsComponent },
];


// Criar, definição e configurar as rotas do projeto:
// forRoot => Rotas da raiz da aplicação.
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
// Precisa ser importado (imports:[]) pelo módulo que o utilizara.
