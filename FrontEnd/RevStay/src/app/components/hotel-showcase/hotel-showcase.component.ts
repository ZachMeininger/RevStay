import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { CurrencyPipe } from '@angular/common';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-showcase',
  standalone: true,
  imports: [CurrencyPipe,AsyncPipe, CommonModule],
  templateUrl: './hotel-showcase.component.html',
  styleUrl: './hotel-showcase.component.css'
})
export class HotelShowcaseComponent {

  constructor(private router: Router) { }
  
  //@Input({ alias: 'inputHotel' }) hotel?: Hotel ;

  @Input({ alias: 'inputHotel' }) hotel?: Hotel;
  
  //@Input({ alias: 'hotName' }) hotelName?: String;

  loadProductPage(current_hotel:Hotel){
    sessionStorage.setItem("Current_Hotel",JSON.stringify(current_hotel));
    this.router.navigate(['/hotel']);
  }
}
