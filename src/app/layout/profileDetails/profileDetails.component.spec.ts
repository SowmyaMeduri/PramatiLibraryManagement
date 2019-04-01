import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProfileDetailsComponent } from './profileDetails.component';
import { ProfileDetailsModule } from './profileDetails.module';

describe('ProfileDetailsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ ProfileDetailsModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ProfileDetailsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
