import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterGettingStartedComponent } from './help-center-getting-started.component';

describe('HelpCenterGettingStartedComponent', () => {
  let component: HelpCenterGettingStartedComponent;
  let fixture: ComponentFixture<HelpCenterGettingStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpCenterGettingStartedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
