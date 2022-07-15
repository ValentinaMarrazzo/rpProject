import { TestBed } from '@angular/core/testing';

import { NewpswGuard } from './newpsw.guard';

describe('NewpswGuard', () => {
  let guard: NewpswGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewpswGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
