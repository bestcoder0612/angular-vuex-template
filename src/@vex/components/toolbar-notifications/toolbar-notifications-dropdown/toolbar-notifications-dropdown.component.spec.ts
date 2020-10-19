import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNotificationsDropdownComponent } from './toolbar-notifications-dropdown.component';

describe('ToolbarNotificationsDropdownComponent', () => {
  let component: ToolbarNotificationsDropdownComponent;
  let fixture: ComponentFixture<ToolbarNotificationsDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarNotificationsDropdownComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarNotificationsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
