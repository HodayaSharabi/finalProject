import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyEventComponent } from './party-event.component';

describe('PartyEventComponent', () => {
  let component: PartyEventComponent;
  let fixture: ComponentFixture<PartyEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
