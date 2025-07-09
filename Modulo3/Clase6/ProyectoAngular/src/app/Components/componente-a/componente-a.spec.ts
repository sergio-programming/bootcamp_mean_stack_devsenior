import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteA } from './componente-a';

describe('ComponenteA', () => {
  let component: ComponenteA;
  let fixture: ComponentFixture<ComponenteA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
