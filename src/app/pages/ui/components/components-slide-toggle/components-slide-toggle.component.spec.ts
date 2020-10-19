import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSlideToggleComponent } from './components-slide-toggle.component';

describe('ComponentsSlideToggleComponent', () => {
  let component: ComponentsSlideToggleComponent;
  let fixture: ComponentFixture<ComponentsSlideToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsSlideToggleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
