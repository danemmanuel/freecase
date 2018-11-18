import { TestBed } from '@angular/core/testing';

import { BrainblockService } from './brainblock.service';

describe('BrainblockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrainblockService = TestBed.get(BrainblockService);
    expect(service).toBeTruthy();
  });
});
