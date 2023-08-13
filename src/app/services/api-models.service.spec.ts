import { TestBed } from '@angular/core/testing';

import { ApiModelsService } from './api-models.service';

describe('ApiModelsService', () => {
  let service: ApiModelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiModelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
