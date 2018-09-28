import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {

  id: number;
  person: any;

  /*
  Represents a disposable resource, such as the execution of an Observable.
  A Subscription has one important method,   unsubscribe, that takes no argument
  and just disposes the resource held by the subscription.
  */
  subs: Subscription;

  // Pegar as informações da rota (ATIVA) associada ao componente.
  constructor(private _activatedRoute: ActivatedRoute, private _peopleService: PeopleService, private _router: Router) {
    // Aqui, ele so ta pegando o primeiro valor da rota, nao as mudanças.
    // this.id = this._activatedRoute.snapshot.params['id'];

    // O ideal e se increver para escutar as mudanças;
  }

  ngOnInit() {
    // Inscrevendo nas mudanças do parametro.

    // O ideal e atribuir essa subscrição a uma variavel para poder destrui-la
    // posteriomente
    this.subs = this._activatedRoute.params.subscribe((params: any) => {
      // Pegando o ID momentaneo da rota.
      this.id = params['id'];
      // Usando esse ID momenetaneo para fazer uma busca (PeopleService).
      this.person = this._peopleService.getPersonByID(this.id);

      console.log(this.person);

      // Redirecionando quando o item nao for encontrado.
      if (this.person == null) {
        this._router.navigate(['/people/notfound']);
      }
    });
  }

  ngOnDestroy() {
    // Destruindo as subscrições:
    this.subs.unsubscribe();
  }
}
