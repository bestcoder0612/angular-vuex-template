import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumboardDialogComponent } from './scrumboard-dialog.component';

describe('ScrumboardDialogComponent', () => {
  let component: ScrumboardDialogComponent;
  let fixture: ComponentFixture<ScrumboardDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScrumboardDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
