import { ConfirmationPopupModule } from './confirmationPopup.module';

describe('SignupModule', () => {
  let signupModule: ConfirmationPopupModule;

  beforeEach(() => {
    signupModule = new ConfirmationPopupModule();
  });

  it('should create an instance', () => {
    expect(signupModule).toBeTruthy();
  });
});
