import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsIcComponent } from './icons-ic.component';

describe('IconsIcComponent', () => {
  let component: IconsIcComponent;
  let fixture: ComponentFixture<IconsIcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconsIcComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsIcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
