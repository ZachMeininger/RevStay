import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Booking } from 'app/models/booking';
import { HotelReservation } from 'app/models/hotelReservation';
import { HotelService } from 'app/services/hotel.service';
import { from} from 'rxjs';

@Component({
  selector: 'app-manage-reservations',
  standalone: true,
  imports: [FormsModule, CommonModule, AsyncPipe],
  templateUrl: './manage-reservations.component.html',
  styleUrl: './manage-reservations.component.css'
})
export class ManageReservationsComponent implements OnInit {
  reservations!: HotelReservation;
  mapFromServer: Map<string, Booking[]> = new Map();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ){}

  ngOnInit(): void {
      this.getReservations();
  }
  getReservations():void {
    const id = sessionStorage.getItem("userId");
 
    const userId = parseInt(id!);
    console.log(`userId is ${userId}`)
    this.hotelService.getReservationsByUserId(userId).subscribe( mapFromServer => {this.mapFromServer = new Map(Object.entries(mapFromServer)); console.log(this.mapFromServer)});
    console.log(this.mapFromServer);

  }
  acceptBooking(booking: Booking){
    booking.bookingAccepted = true;
    this.hotelService.submitBooking(booking);

  }
  rejectBooking(booking: Booking){

  }
}
