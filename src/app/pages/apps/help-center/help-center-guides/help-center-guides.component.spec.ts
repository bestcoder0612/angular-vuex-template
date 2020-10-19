import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterGuidesComponent } from './help-center-guides.component';

describe('HelpCenterGuidesComponent', () => {
  let component: HelpCenterGuidesComponent;
  let fixture: ComponentFixture<HelpCenterGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpCenterGuidesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
