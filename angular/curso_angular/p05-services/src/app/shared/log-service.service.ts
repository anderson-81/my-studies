import { Injectable } from '@angular/core';

@Injectable()
export class LogServiceService {

  constructor() { }

  SetConsole(text: string) {
    console.log(text);
  }

}
