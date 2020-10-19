import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarNotificationsComponent } from './toolbar-notifications.component';

describe('ToolbarNotificationsComponent', () => {
  let component: ToolbarNotificationsComponent;
  let fixture: ComponentFixture<ToolbarNotificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarNotificationsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
