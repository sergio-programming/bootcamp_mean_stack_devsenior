import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteB } from './componente-b';

describe('ComponenteB', () => {
  let component: ComponenteB;
  let fixture: ComponentFixture<ComponenteB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
