import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleComponent } from './cicle.component';

describe('CicleComponent', () => {
  let component: CicleComponent;
  let fixture: ComponentFixture<CicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
