import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutCardComponent } from './page-layout-card.component';

describe('PageLayoutCardComponent', () => {
  let component: PageLayoutCardComponent;
  let fixture: ComponentFixture<PageLayoutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
