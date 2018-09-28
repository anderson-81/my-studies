import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculesService } from '../veicules.service';
import { Subscription } from 'rxjs';
import { Veicule } from '../veicule';

@Component({
  selector: 'app-veicules-details',
  templateUrl: './veicules-details.component.html',
  styleUrls: ['./veicules-details.component.css']
})
export class VeiculesDetailsComponent implements OnInit, OnDestroy {

  veicule: any;
  sub: Subscription;
  constructor(private _activatedRoute: ActivatedRoute, private _veiculesService: VeiculesService, private router: Router) { }

  ngOnInit() {
    /*
    this.sub = this._activatedRoute.params.subscribe((params: any) => {
      this.veicule = this._veiculesService.getVeiculeByID(params['id']);
      if (this.veicule == null) {
        this.veicule = {};
      }
    });
    */

    // Guarda de Rota do tipo Resolver:
    // Tem diferença quando se trabalha com AJAX e servidor.
    this.sub = this._activatedRoute.data.subscribe((info: { veicule: Veicule }) => {
      console.log('RouterGuard Resolver');
      console.log(info);
      this.veicule = info.veicule;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  EditVeicule() {
    console.log('editar!');
    this.router.navigate(['/veicules', this.veicule.id, 'edit']); // cuidado com a barra '/' aqui.
  }
}
