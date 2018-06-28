import { TestBed, inject } from '@angular/core/testing';

import { ProduitserviceService } from './produitservice.service';

describe('ProduitserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitserviceService]
    });
  });

  it('should be created', inject([ProduitserviceService], (service: ProduitserviceService) => {
    expect(service).toBeTruthy();
  }));
});
