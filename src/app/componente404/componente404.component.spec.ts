import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente404Component } from './componente404.component';

describe('Componente404Component', () => {
  let component: Componente404Component;
  let fixture: ComponentFixture<Componente404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Componente404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
