import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSliderComponent } from './components-slider.component';

describe('ComponentsSliderComponent', () => {
  let component: ComponentsSliderComponent;
  let fixture: ComponentFixture<ComponentsSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsSliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
