import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioId } from './usuario-id';

describe('UsuarioId', () => {
  let component: UsuarioId;
  let fixture: ComponentFixture<UsuarioId>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioId]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioId);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
