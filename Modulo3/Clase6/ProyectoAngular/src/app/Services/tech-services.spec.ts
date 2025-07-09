import { TestBed } from '@angular/core/testing';

import { TechServices } from './tech-services';

describe('TechServices', () => {
  let service: TechServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
