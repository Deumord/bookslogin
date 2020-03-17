import { TestBed, async, inject } from '@angular/core/testing';

import { PinkGuard } from './pink.guard';

describe('PinkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PinkGuard]
    });
  });

  it('should ...', inject([PinkGuard], (guard: PinkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
