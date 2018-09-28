import { Injectable, EventEmitter } from '@angular/core';
import { LogServiceService } from '../shared/log-service.service';

// Preciso inserir o decorator Injectable()
@Injectable()
export class PeopleService {

  emitterPeopleCreated = new EventEmitter<string>(); // Tipagem opcional.
  // Para utlizar eventos, tempos que nos subscrever.

  // static emitterPeopleCreated2 = new EventEmitter<string>(); // Tipagem opcional.

  people: string[] = ['Anderson', 'Mara', 'Adriana', 'Lulu', 'Fernanda', 'Mia'];

  getPeople() {
    this._logServiceService.SetConsole('Getting people\'s list.');
    return this.people;
  }

  constructor(private _logServiceService: LogServiceService) {
    console.log('PeopleService created.');
  }

  createPerson(name: string) {
    // this._logServiceService.SetConsole('Create a new person: ' + name);
    // Utilizando a sintaxe do EcmaScript 6
    this._logServiceService.SetConsole(`Create a new person: ${name}`);
    this.people.push(name);
    this.emitterPeopleCreated.emit(name);
    // PeopleService.emitterPeopleCreated2.emit(name);
  }
}

// Preciso informar ao "app.modules.ts" que ela é um provider.
