/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogServiceService } from './log-service.service';

describe('LogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogServiceService]
    });
  });

  it('should ...', inject([LogServiceService], (service: LogServiceService) => {
    expect(service).toBeTruthy();
  }));
});
