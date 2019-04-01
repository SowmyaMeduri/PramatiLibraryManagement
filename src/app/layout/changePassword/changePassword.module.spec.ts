import { ChangePasswordModule } from './changePassword.module';

describe('booksModule', () => {
  let booksModule: ChangePasswordModule;

  beforeEach(() => {
    booksModule = new ChangePasswordModule();
  });

  it('should create an instance', () => {
    expect(booksModule).toBeTruthy();
  });
});
