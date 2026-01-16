import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSucursalesComponent } from './all-sucursales-component';

describe('AllSucursalesComponent', () => {
  let component: AllSucursalesComponent;
  let fixture: ComponentFixture<AllSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSucursalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
