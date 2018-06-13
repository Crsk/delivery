import { TestBed, inject } from '@angular/core/testing';

import { IngredienteService } from './ingrediente.service';

describe('IngredienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IngredienteService]
    });
  });

  it('should be created', inject([IngredienteService], (service: IngredienteService) => {
    expect(service).toBeTruthy();
  }));
});
