import { TestBed } from '@angular/core/testing';

import { SucursalesServices } from './sucursales-services';

describe('SucursalesServices', () => {
  let service: SucursalesServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucursalesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
