import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewBookingNotificationDTO } from 'app/dto/new-booking-notification.dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewBookingNotificationService {

  constructor(private router: Router) { }

  bookingSuccessForCustomer(router : any) {
    window.alert('Your booking was successful!');
    router.navigate(['/home']);
  }

  bookingDetailsForOwner(details: string) {
    console.log('New booking details:', details);
  }

  bookingFailureForCustomer(router : any) {
    window.alert('Sorry, your booking was unsuccessful.');
    router.navigate(['/home']);
  }
}
