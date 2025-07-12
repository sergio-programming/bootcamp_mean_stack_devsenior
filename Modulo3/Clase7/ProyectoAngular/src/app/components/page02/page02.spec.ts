import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page02 } from './page02';

describe('Page02', () => {
  let component: Page02;
  let fixture: ComponentFixture<Page02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
