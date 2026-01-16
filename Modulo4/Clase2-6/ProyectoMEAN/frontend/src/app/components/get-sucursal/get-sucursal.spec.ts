import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSucursal } from './get-sucursal';

describe('GetSucursal', () => {
  let component: GetSucursal;
  let fixture: ComponentFixture<GetSucursal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetSucursal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSucursal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
