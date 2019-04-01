import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { IssuingBooksListComponent } from './issuingBooksList.component';
import { IssuingBooksListModule } from './issuingBooksList.module';

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ IssuingBooksListModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(IssuingBooksListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
