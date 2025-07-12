import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page03 } from './page03';

describe('Page03', () => {
  let component: Page03;
  let fixture: ComponentFixture<Page03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
