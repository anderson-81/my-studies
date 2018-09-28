import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCmpComponent } from './http-cmp.component';

describe('HttpCmpComponent', () => {
  let component: HttpCmpComponent;
  let fixture: ComponentFixture<HttpCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
