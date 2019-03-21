import { FederationModule } from './federation.module';

describe('FederationModule', () => {
  let federationModule: FederationModule;

  beforeEach(() => {
    federationModule = new FederationModule();
  });

  it('should create an instance', () => {
    expect(federationModule).toBeTruthy();
  });
});
