import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page01 } from './page01';

describe('Page01', () => {
  let component: Page01;
  let fixture: ComponentFixture<Page01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
