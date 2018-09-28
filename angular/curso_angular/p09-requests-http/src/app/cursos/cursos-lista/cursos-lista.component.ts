import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { Observable } from 'rxjs';
import { delay } from 'q';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {

  // cursos: Curso[];

  // Pipe async (Subscribe e Unsubscribe atomaticamente)
  // Notação filandesa:
  cursos$: Observable<Curso[]>;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    /*
    this.cursosService.listarCursos().subscribe(dados_retonados => {
      this.cursos = dados_retonados;
    });
    */

    // Segunda forma com pipe async:
    this.cursos$ =  this.cursosService.listarCursos().pipe();
  }

}
