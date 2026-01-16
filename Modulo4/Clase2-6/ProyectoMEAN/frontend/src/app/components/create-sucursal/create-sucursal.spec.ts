import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSucursal } from './create-sucursal';

describe('CreateSucursal', () => {
  let component: CreateSucursal;
  let fixture: ComponentFixture<CreateSucursal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSucursal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSucursal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
