import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsProgressSpinnerComponent } from './components-progress-spinner.component';

describe('ComponentsProgressSpinnerComponent', () => {
  let component: ComponentsProgressSpinnerComponent;
  let fixture: ComponentFixture<ComponentsProgressSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsProgressSpinnerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
