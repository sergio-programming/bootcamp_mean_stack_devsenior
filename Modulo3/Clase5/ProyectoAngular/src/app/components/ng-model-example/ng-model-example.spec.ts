import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelExample } from './ng-model-example';

describe('NgModelExample', () => {
  let component: NgModelExample;
  let fixture: ComponentFixture<NgModelExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModelExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
