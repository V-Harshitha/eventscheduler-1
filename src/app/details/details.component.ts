import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
 event: {
    eventDate: string;
    startTime: string;
    endTime: string;
    eventLocation: string;
    organizerName: string;
    organizerEmail: string;
    session1Name: string;
    session1Speaker: string;
    session2Name: string;
    session2Speaker: string;
    registrationLink: string;
    attendees: string[];
    locationDetails: string;
    sponsors: string;
    eventWebsite: string;
    eventDocuments: string;
    eventImage: string;
    eventVideo: string;
    facebookLink: string;
    twitterLink: string;
    feedbackSurveyLink: string;
    presentationDownload: string;
    handoutsDownload: string;
  };

  constructor() {
    // Initialize the event object with data
    this.event = {
      eventDate: '2023-11-01',
      startTime: '09:00 AM',
      endTime: '05:00 PM',
      eventLocation: 'Event Venue',
      organizerName: 'Organizer Name',
      organizerEmail: 'organizer@example.com',
      session1Name: 'Session 1',
      session1Speaker: 'Speaker 1',
      session2Name: 'Session 2',
      session2Speaker: 'Speaker 2',
      registrationLink: 'https://example.com/register',
      attendees: ['John Doe', 'Jane Smith'],
      locationDetails: 'Detailed location information goes here.',
      sponsors: 'Sponsor details go here.',
      eventWebsite: 'https://example.com/event',
      eventDocuments: 'https://example.com/documents',
      eventImage: 'https://example.com/event.jpg',
      eventVideo: 'https://example.com/event.mp4',
      facebookLink: 'https://facebook.com/eventpage',
      twitterLink: 'https://twitter.com/eventpage',
      feedbackSurveyLink: 'https://example.com/feedback',
      presentationDownload: 'https://example.com/presentation.pdf',
      handoutsDownload: 'https://example.com/handouts.pdf',
    };
  }

}
