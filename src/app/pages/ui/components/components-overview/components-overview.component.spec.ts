import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsOverviewComponent } from './components-overview.component';

describe('ComponentsOverviewComponent', () => {
  let component: ComponentsOverviewComponent;
  let fixture: ComponentFixture<ComponentsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
