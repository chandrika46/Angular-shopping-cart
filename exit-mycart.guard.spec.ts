import { TestBed } from '@angular/core/testing';

import { ExitMycartGuard } from './exit-mycart.guard';

describe('LogoutGuard', () => {
  let guard: ExitMycartGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitMycartGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
