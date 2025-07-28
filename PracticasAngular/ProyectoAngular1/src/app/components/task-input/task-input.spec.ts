import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInput } from './task-input';

describe('TaskInput', () => {
  let component: TaskInput;
  let fixture: ComponentFixture<TaskInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
