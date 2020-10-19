import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutCardTabbedComponent } from './page-layout-card-tabbed.component';

describe('PageLayoutCardTabbedComponent', () => {
  let component: PageLayoutCardTabbedComponent;
  let fixture: ComponentFixture<PageLayoutCardTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutCardTabbedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutCardTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
