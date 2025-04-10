import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarclienteComponent } from './seleccionarcliente.component';

describe('SeleccionarclienteComponent', () => {
  let component: SeleccionarclienteComponent;
  let fixture: ComponentFixture<SeleccionarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
