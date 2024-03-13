import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewBookingNotificationService {

  constructor(private http: HttpClient) { }

  // Method to notify user about a new booking
  notifyNewBooking(userId: number) {
    // Make an HTTP request to notify the user
    this.http.post<any>('http://localhost:8080/notifyBooking', { userId })
      .subscribe(
        () => console.log('Notification sent successfully'), // Log success
        (error) => console.error('Error occurred while sending notification:', error) // Log error
      );
  }
}
