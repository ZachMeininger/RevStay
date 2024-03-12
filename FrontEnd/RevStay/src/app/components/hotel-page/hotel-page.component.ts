import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Room } from '../../models/room'
import { Booking } from '../../models/booking'
import { HotelService } from 'app/services/hotel.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotel-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './hotel-page.component.html',
  styleUrl: './hotel-page.component.css'
})
export class HotelPageComponent implements OnInit{
  rooms: Room[] = [];
  checkInDate : Date = new Date();
  checkOutDate : Date = new Date();
  numGuests = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.getHotelRooms();
  }

  getHotelRooms():void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!, 10);
    this.hotelService.getRoomsByHotelId(id)
      .subscribe(rooms => this.rooms = rooms);

  }
  bookRoom(roomId: Number) {
    const roomBooking = this.buildBooking(roomId);
    let result = this.hotelService.submitBooking(roomBooking)
    console.log(result.subscribe());
    this.router.navigate(["/"])
  }

  buildBooking(roomId: Number): Booking {
    const book = {
      bookingStart: this.checkInDate,
      bookingEnd: this.checkOutDate,
      bookingGuests: this.numGuests,
      bookingPaid: false,
      bookingAccepted: false,
      roomId: roomId,
      customerAccountId: parseInt(sessionStorage.getItem("userId")!)
    }
    return book;
  }

}
