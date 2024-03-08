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
    hotelAddress: '',
    description: '',
    hotelImage: '',
    hotelPriceHigh: '',
    hotelPriceLow: '',
    hotelPool: '',
    hotelSauna: '',
    hotelRest: '',
    availability: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  onSubmit(): void {
    const observer = {
      next: (response: any) => {
        console.log('Hotel added successfully!', response);
        this.router.navigate(['/success']); 
      },
      error: (error: any) => {
        console.error('Error occurred while adding hotel:', error);
      },
      complete: () => {
        console.log('HTTP request completed');
      }
    };

   /*
    this.http.post<any>('http://localhost:8080/hotels', this.hotel)
      .subscribe(observer);
  }
  */
}
}
