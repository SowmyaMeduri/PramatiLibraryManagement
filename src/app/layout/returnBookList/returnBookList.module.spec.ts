import { ReturnBookListModule } from './returnBookList.module';

describe('ReturnBookListModule', () => {
  let returnBookListModule: ReturnBookListModule;

  beforeEach(() => {
    returnBookListModule = new ReturnBookListModule();
  });

  it('should create an instance', () => {
    expect(returnBookListModule).toBeTruthy();
  });
});
