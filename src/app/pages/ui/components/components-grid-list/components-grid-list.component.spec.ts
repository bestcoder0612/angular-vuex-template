import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsGridListComponent } from './components-grid-list.component';

describe('ComponentsGridListComponent', () => {
  let component: ComponentsGridListComponent;
  let fixture: ComponentFixture<ComponentsGridListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsGridListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
