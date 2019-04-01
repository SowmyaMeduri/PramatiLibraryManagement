import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ReturnBookListComponent } from './returnBookList.component';
import { ReturnBookListModule } from './returnBookList.module';

describe('ReturnBookListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ReturnBookListModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ReturnBookListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
