import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSucursal } from './delete-sucursal';

describe('DeleteSucursal', () => {
  let component: DeleteSucursal;
  let fixture: ComponentFixture<DeleteSucursal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteSucursal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSucursal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
