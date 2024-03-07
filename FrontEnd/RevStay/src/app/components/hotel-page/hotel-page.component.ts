import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Room } from '../../models/room'
import { HotelService } from 'app/services/hotel.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hotel-page.component.html',
  styleUrl: './hotel-page.component.css'
})
export class HotelPageComponent implements OnInit{
  rooms: Room[] = [];
  checkInDate : Date = new Date();
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
    this.hotelService.submitBooking()
    this.router.navigate(["/"])
  }

}