import { IssuingBooksListModule } from './issuingBooksList.module';

describe('IssuingBooksListModule', () => {
  let issuingBooksListModule: IssuingBooksListModule;

  beforeEach(() => {
    issuingBooksListModule = new IssuingBooksListModule();
  });

  it('should create an instance', () => {
    expect(issuingBooksListModule).toBeTruthy();
  });
});
