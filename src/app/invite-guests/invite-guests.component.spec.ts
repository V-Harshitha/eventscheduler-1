import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteGuestsComponent } from './invite-guests.component';

describe('InviteGuestsComponent', () => {
  let component: InviteGuestsComponent;
  let fixture: ComponentFixture<InviteGuestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InviteGuestsComponent]
    });
    fixture = TestBed.createComponent(InviteGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
