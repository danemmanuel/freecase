import { TestBed } from '@angular/core/testing';

import { GetinfosService } from './getinfos.service';

describe('GetinfosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetinfosService = TestBed.get(GetinfosService);
    expect(service).toBeTruthy();
  });
});
