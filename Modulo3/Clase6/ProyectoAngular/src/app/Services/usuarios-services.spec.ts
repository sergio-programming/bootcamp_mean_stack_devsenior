import { TestBed } from '@angular/core/testing';

import { UsuariosServices } from './usuarios-services';

describe('UsuariosServices', () => {
  let service: UsuariosServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
