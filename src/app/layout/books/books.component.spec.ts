import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BooksComponent } from './books.component';
import { BooksModule } from './books.module';

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BooksModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(BooksComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
