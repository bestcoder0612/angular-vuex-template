import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsTableMenuComponent } from './contacts-table-menu.component';

describe('ContactsTableMenuComponent', () => {
  let component: ContactsTableMenuComponent;
  let fixture: ComponentFixture<ContactsTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
