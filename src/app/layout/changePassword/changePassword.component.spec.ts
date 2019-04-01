import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ChangePasswordComponent } from './changePassword.component';
import { ChangePasswordModule } from './changePassword.module';

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ChangePasswordModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ChangePasswordComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
