import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentList } from './incident-list';

describe('IncidentList', () => {
  let component: IncidentList;
  let fixture: ComponentFixture<IncidentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidentList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
