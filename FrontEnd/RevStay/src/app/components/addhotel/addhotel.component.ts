import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'app/services/hotel.service';
import {Hotel} from '../../models/hotel';

@Component({
  selector: 'app-addhotel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent {

  hotel: Hotel = {
    hotelId: 0,
    hotelName: '',
    hotelAddress: '',
    hotelDescription: '',
    hotelImage: '',
    priceHigh: 0,
    priceLow: 0,
    hotelPool: 0,
    hotelSauna: 0,
    hotelRest: 0,
    userId: 0
  };

  constructor(private http: HttpClient, private router: Router, private hotelService: HotelService) { }

  onSubmit(): void {
    
    this.hotelService.addHotel(this.hotel).subscribe(
      (response: any) => {
        console.log('Hotel added successfully!', response);
        this.router.navigate(['/home']); 
      },
      (error: any) => {
        console.error('Error occurred while adding hotel:', error);
      }
    );
  }
}

