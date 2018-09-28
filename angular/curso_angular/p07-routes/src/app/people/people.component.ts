import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from './people.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit, OnDestroy {

  people: any = [];

  page: number;

  subs: Subscription;

  constructor(private _peopleService: PeopleService, private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.people = this._peopleService.getPeople();
    this.subs = this._activatedRoute.queryParams.subscribe((queryParams: any) => {
      this.page = queryParams['page'];
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  NextPage() {
    // Primeira opção:
    // this.page++;

    // Segunda opção:]
    // console.log(this._router);

    this._router.navigate(['/people'], { queryParams: { 'page': ++this.page } });
  }
}
