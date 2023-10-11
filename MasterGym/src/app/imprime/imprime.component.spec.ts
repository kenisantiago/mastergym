import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeComponent } from './imprime.component';

describe('ImprimeComponent', () => {
  let component: ImprimeComponent;
  let fixture: ComponentFixture<ImprimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
