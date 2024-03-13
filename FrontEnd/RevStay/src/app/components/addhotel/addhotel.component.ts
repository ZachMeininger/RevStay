import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelService } from 'app/services/hotel.service';

@Component({
  selector: 'app-addhotel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent {

  hotel: any = {
    hotelid: 0,
    hotelName: '',
    address: '',
    description: '',
    image: '',
    hotelPriceHigh: '',
    hotelPriceLow: '',
    hotelPool: '',
    hotelSauna: '',
    restaurant: '',
    availability: ''
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

