import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso';
import { environment } from '../../environments/environment';
import { delay } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }

  listarCursos() {
    // return this.http.get(this.API);

    // retorno tipado:
    return this.http.get<Curso[]>(this.API);
  }
}
