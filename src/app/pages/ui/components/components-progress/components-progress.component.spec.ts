import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsProgressComponent } from './components-progress.component';

describe('ComponentsProgressComponent', () => {
  let component: ComponentsProgressComponent;
  let fixture: ComponentFixture<ComponentsProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsProgressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
