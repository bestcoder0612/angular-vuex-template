import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCardComponent } from './contacts-card.component';

describe('ContactsCardComponent', () => {
  let component: ContactsCardComponent;
  let fixture: ComponentFixture<ContactsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
