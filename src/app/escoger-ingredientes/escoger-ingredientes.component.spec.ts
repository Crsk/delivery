import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscogerIngredientesComponent } from './escoger-ingredientes.component';

describe('EscogerIngredientesComponent', () => {
  let component: EscogerIngredientesComponent;
  let fixture: ComponentFixture<EscogerIngredientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscogerIngredientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscogerIngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
