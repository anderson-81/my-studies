/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VeiculesService } from './veicules/veicules.service';

describe('VeiculesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculesService]
    });
  });

  it('should ...', inject([VeiculesService], (service: VeiculesService) => {
    expect(service).toBeTruthy();
  }));
});
