import { CreateBookModule } from './createbook.module';

describe('CreateBookModule', () => {
  let createBookModule: CreateBookModule;

  beforeEach(() => {
    createBookModule = new CreateBookModule();
  });

  it('should create an instance', () => {
    expect(createBookModule).toBeTruthy();
  });
});
