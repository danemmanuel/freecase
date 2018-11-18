import { BrainblockModule } from './brainblock.module';

describe('BrainblockModule', () => {
  let brainblockModule: BrainblockModule;

  beforeEach(() => {
    brainblockModule = new BrainblockModule();
  });

  it('should create an instance', () => {
    expect(brainblockModule).toBeTruthy();
  });
});
