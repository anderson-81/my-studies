import { Component, OnInit } from '@angular/core';
import { VeiculesService } from './veicules.service';

@Component({
  selector: 'app-veicules',
  templateUrl: './veicules.component.html',
  styleUrls: ['./veicules.component.css']
})
//  export class VeiculesComponent implements OnInit {
export class VeiculesComponent implements OnInit {

  veicules: any = [];

  constructor(private _veiculesService: VeiculesService) {
  }

  ngOnInit() {
    this.veicules = this._veiculesService.getVeicules();
  }
}
