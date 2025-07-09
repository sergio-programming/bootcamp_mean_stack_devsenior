import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAreas } from './table-areas';

describe('TableAreas', () => {
  let component: TableAreas;
  let fixture: ComponentFixture<TableAreas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableAreas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAreas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
