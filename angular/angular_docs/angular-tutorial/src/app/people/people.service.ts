import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './mock-people';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../messages.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private messagesService: MessagesService) { }

  getPeople(): Person[] {
    return PEOPLE;
  }

  getPeopleObservable(): Observable<Person[]> {
    // Vai disparar uma mensagem quando "people" forem listadas:
    this.messagesService.add('PeopleService - Fecthed people');

    // Primeira versão sem HttpClient:
    return of(PEOPLE);
  }

  getPersonByID(id: number): Observable<Person> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.add(`PeopleService - fetched person id=${id}`);
    return of(PEOPLE.find(hero => hero.id === id));
  }
}
