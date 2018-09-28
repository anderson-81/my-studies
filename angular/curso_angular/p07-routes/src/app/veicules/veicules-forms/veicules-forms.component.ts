import { Component, OnInit, OnDestroy } from '@angular/core';
// import { VeiculesModule } from '../veicules.module';
import { VeiculesService } from '../veicules.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IFormDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-veicules-forms',
  templateUrl: './veicules-forms.component.html',
  styleUrls: ['./veicules-forms.component.css']
})
// export class VeiculesFormsComponent implements OnInit {
export class VeiculesFormsComponent implements OnInit, IFormDeactivate, OnDestroy {
  constructor(private _veiculesService: VeiculesService, private _activatedRoute: ActivatedRoute) { }

  veicule: any;

  subs: Subscription;

  // Usando pelo canDeactivate:
  private frmChange = false;

  ngOnInit() {
    this.subs = this._activatedRoute.params.subscribe((params: any) => {
      this.veicule = this._veiculesService.getVeiculeByID(params['id']);
      if (this.veicule == null) {
        this.veicule = {};
      }
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  checkInput() {
    this.frmChange = true;
  }

  canChangeRouter() {
    if (this.frmChange) {
      if (confirm('Do you want to quit?')) {
        return true;
      }
      return false;
    }
  }

  canDeactivateForm() {
    console.log('chamando metodo...');
    return this.canChangeRouter();
  }
}
