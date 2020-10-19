import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutCardLargeHeaderComponent } from './page-layout-card-large-header.component';

describe('PageLayoutCardLargeHeaderComponent', () => {
  let component: PageLayoutCardLargeHeaderComponent;
  let fixture: ComponentFixture<PageLayoutCardLargeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutCardLargeHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutCardLargeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
