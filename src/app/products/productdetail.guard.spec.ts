import { TestBed, async, inject } from '@angular/core/testing';

import { ProductdetailGuard } from './productdetail.guard';

describe('ProductdetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductdetailGuard]
    });
  });

  it('should ...', inject([ProductdetailGuard], (guard: ProductdetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
