import { ProfileDetailsModule } from './profileDetails.module';

describe('ProfileDetailsModule', () => {
  let profileDetailsModule: ProfileDetailsModule;

  beforeEach(() => {
    profileDetailsModule = new ProfileDetailsModule();
  });

  it('should create an instance', () => {
    expect(profileDetailsModule).toBeTruthy();
  });
});
