import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Booking } from 'app/models/booking';
import { HotelReservation } from 'app/models/hotelReservation';
import { HotelService } from 'app/services/hotel.service';
import { from} from 'rxjs';

@Component({
  selector: 'app-manage-reservations',
  standalone: true,
  imports: [],
  templateUrl: './manage-reservations.component.html',
  styleUrl: './manage-reservations.component.css'
})
export class ManageReservationsComponent implements OnInit {
  reservations!: HotelReservation ;
  mapFromServer!: Map<string, Booking[]>;
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
    if(id === null){
      return
    }
    const userId = parseInt(id);
    this.hotelService.getReservationsByUserId(userId).subscribe((reservations) => {this.reservations = reservations});
    console.log(this.mapFromServer);

  }
  acceptBooking(booking: Booking){

  }
  rejectBooking(booking: Booking){

  }


}
