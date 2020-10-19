import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutSimpleComponent } from './page-layout-simple.component';

describe('PageLayoutSimpleComponent', () => {
  let component: PageLayoutSimpleComponent;
  let fixture: ComponentFixture<PageLayoutSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutSimpleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
