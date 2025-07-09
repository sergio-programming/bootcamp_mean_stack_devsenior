import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCourses } from './table-courses';

describe('TableCourses', () => {
  let component: TableCourses;
  let fixture: ComponentFixture<TableCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCourses);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
