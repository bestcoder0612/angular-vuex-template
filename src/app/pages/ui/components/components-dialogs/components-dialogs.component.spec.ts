import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDialogsComponent } from './components-dialogs.component';

describe('ComponentsDialogsComponent', () => {
  let component: ComponentsDialogsComponent;
  let fixture: ComponentFixture<ComponentsDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsDialogsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
