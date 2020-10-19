import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFaComponent } from './icons-fa.component';

describe('IconsFaComponent', () => {
  let component: IconsFaComponent;
  let fixture: ComponentFixture<IconsFaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconsFaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsFaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
