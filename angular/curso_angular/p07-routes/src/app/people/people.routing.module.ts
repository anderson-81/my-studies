// Aqui é criado, um módulo de rotas.

// Copio tudo que tá no app.routing.module.ts e removo tudo que não for
// inerente ao componente (people).

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from '../people/people.component';
import { PersonDetailsComponent } from '../people/person-details/person-details.component';
import { PersonNotfoundComponent } from '../people/person-notfound/person-notfound.component';

export const peopleRoutes: Routes = [
    // Ao trabalhar comn lazy loading, as rotas precisam ter um padrão, então será:
    // '/', '/notfound', '/people/:id'
    {
        path: 'notfound',
        component: PersonNotfoundComponent
    },
    {
        path: 'person',
        children: [
            {
                path: ':id',
                component: PersonDetailsComponent
            }
        ]
    },
    {
        path: '',
        component: PeopleComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(peopleRoutes)], // Renomeio para forChild aqui, pq e modulo de funcionalidade.
    exports: [RouterModule]
})
export class PeopleRoutingModule {
}
