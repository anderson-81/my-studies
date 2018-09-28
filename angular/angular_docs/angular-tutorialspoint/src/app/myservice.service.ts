import { Injectable } from '@angular/core';
import { Person } from './person';

import { environment } from '../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MyService {

    constructor(private http: HttpClient) {
        this.people = [
            new Person(1, 'Anderson'),
            new Person(2, 'Natalia'),
            new Person(3, 'Lucia'),
            new Person(4, 'Vera'),
            new Person(5, 'Paula'),
            new Person(6, 'Renata'),
        ];
    }

    people: Person[] = [];

    private readonly API = `${environment.API}person`;

    subs: Subscription;

    peopleHttp: Person[];

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy() {
        this.subs.unsubscribe();
    }

    getPeople() {
        return this.people;
    }

    private executeHttp() {
        this.subs = this.http.get<Person[]>('http://localhost:3000/person').subscribe(person => { this.peopleHttp = person; });
    }

    getPeopleHttp() {
        this.executeHttp();
        return this.peopleHttp;
    }
}
