import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterPricingComponent } from './help-center-pricing.component';

describe('HelpCenterPricingComponent', () => {
  let component: HelpCenterPricingComponent;
  let fixture: ComponentFixture<HelpCenterPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelpCenterPricingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCenterPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
