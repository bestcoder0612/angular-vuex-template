import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsAutocompleteComponent } from './components-autocomplete.component';

describe('ComponentsAutocompleteComponent', () => {
  let component: ComponentsAutocompleteComponent;
  let fixture: ComponentFixture<ComponentsAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsAutocompleteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
