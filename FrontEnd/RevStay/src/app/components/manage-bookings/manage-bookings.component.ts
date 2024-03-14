import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking } from 'app/models/booking';
import { HotelService } from 'app/services/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-bookings',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './manage-bookings.component.html',
  styleUrl: './manage-bookings.component.css'
})
export class ManageBookingsComponent implements OnInit {
  bookings!: Booking[]
  constructor(
    private router: Router,
    private hotelService: HotelService
  ){}

  ngOnInit(): void {
      this.getBookings();
  }
  getBookings():void {
    const id = sessionStorage.getItem("userId");
    const userId = parseInt(id!);
    this.hotelService.getBookingsByCustomerId(userId)
    .subscribe(bookings => this.bookings = bookings);
  }
  editBooking(booking: Booking){

  }
  payForBooking(booking: Booking) {
    this.router.navigate(["/checkout"])
  }

}
