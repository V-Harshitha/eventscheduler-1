import { Component } from '@angular/core';

@Component({
  selector: 'app-invite-guests',
  templateUrl: './invite-guests.component.html',
  styleUrls: ['./invite-guests.component.css']
})
export class InviteGuestsComponent {

  guestEmail: string = '';

  inviteGuest() {
    if (this.guestEmail) {
      // Compose the mailto URI
      const mailtoUri = `mailto:${this.guestEmail}?subject=Invitation&body=Hello, please join our event!`;

      // Open the user's default email client
      window.location.href = mailtoUri;
    } else {
      alert('Please enter a valid email address before inviting.');
    }
  }
}
