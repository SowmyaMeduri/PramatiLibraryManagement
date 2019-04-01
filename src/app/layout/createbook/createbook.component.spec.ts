import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateBookComponent } from './createbook.component';
import { CreateBookModule } from './createbook.module';

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CreateBookModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(CreateBookComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
