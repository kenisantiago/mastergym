import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersuscripcionComponent } from './versuscripcion.component';

describe('VersuscripcionComponent', () => {
  let component: VersuscripcionComponent;
  let fixture: ComponentFixture<VersuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
