import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSucursal } from './update-sucursal';

describe('UpdateSucursal', () => {
  let component: UpdateSucursal;
  let fixture: ComponentFixture<UpdateSucursal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSucursal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSucursal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
