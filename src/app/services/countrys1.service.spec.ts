import { TestBed } from '@angular/core/testing';

import { Countrys1Service } from './countrys1.service';

describe('Countrys1Service', () => {
  let service: Countrys1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Countrys1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
