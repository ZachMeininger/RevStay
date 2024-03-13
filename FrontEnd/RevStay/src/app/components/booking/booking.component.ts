import { Component } from '@angular/core';
import { BookingService } from 'app/services/notification.service';
import { NewBookingNotificationService } from 'app/services/new-booking-notification-service.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  constructor(
    private bookingService: BookingService,
    private newBookingNotificationService: NewBookingNotificationService
  ) { }

  handleBooking() {
    const bookingDetails = {  };
    this.bookingService.createBooking(bookingDetails).subscribe(
      (response) => {
        if (response.success) {
          this.newBookingNotificationService.bookingSuccessForCustomer();
        } else {
          this.newBookingNotificationService.bookingFailureForCustomer();
        }
      },
      (error) => {
        console.error('Error occurred while creating booking:', error);
      }
    );
  }
}

