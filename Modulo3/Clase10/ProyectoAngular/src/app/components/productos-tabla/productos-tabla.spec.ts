import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosTabla } from './productos-tabla';

describe('ProductosTabla', () => {
  let component: ProductosTabla;
  let fixture: ComponentFixture<ProductosTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
