import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLayoutDemoComponent } from './page-layout-demo.component';

describe('PageLayoutDemoComponent', () => {
  let component: PageLayoutDemoComponent;
  let fixture: ComponentFixture<PageLayoutDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageLayoutDemoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLayoutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
