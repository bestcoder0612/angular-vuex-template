import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDataTableComponent } from './contacts-data-table.component';

describe('ContactsTableComponent', () => {
  let component: ContactsDataTableComponent;
  let fixture: ComponentFixture<ContactsDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
