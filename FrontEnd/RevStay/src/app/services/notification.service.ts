import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notifications: string[] = [];

  constructor() { }

  addNotification(message: string) {
    this.notifications.push(message);
  }

  removeNotification(index: number) {
    this.notifications.splice(index, 1);
  }

  clearNotifications() {
    this.notifications = [];
  }

  bookingSuccessForCustomer() {
    this.addNotification('Your booking was successful!');
  }

  bookingDetailsForOwner(details: string) {
    this.addNotification(`A new booking was made: ${details}`);
  }

  bookingFailureForCustomer() {
    this.addNotification('Sorry, your booking was unsuccessful.');
  }
}
