import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsRadioComponent } from './components-radio.component';

describe('ComponentsRadioComponent', () => {
  let component: ComponentsRadioComponent;
  let fixture: ComponentFixture<ComponentsRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsRadioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
