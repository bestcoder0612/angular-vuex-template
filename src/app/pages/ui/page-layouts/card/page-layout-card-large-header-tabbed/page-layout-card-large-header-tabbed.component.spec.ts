import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutCardLargeHeaderTabbedComponent } from './page-layout-card-large-header-tabbed.component';

describe('PageLayoutCardLargeHeaderTabbedComponent', () => {
  let component: PageLayoutCardLargeHeaderTabbedComponent;
  let fixture: ComponentFixture<PageLayoutCardLargeHeaderTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutCardLargeHeaderTabbedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutCardLargeHeaderTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
