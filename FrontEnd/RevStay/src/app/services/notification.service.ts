import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewBookingNotificationDTO } from 'app/dto/new-booking-notification.dto'; 

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  createBooking(bookingDetails: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/booking', bookingDetails); 
  }

  notifyNewBooking(userId: number): Observable<any> {
    return this.http.post<any>('http://localhost:8080/notifyBooking', { userId });
  }

  bookingSuccessForOwner(details: string): Observable<any> {
    return this.http.post<any>('http://localhost:8080/notifyBookingOwner', { details });
  }
}
