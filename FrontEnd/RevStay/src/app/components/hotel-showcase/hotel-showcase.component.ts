import { Component, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';
import { CurrencyPipe } from '@angular/common';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotel-showcase',
  standalone: true,
  imports: [CurrencyPipe,AsyncPipe, CommonModule,RouterModule],
  templateUrl: './hotel-showcase.component.html',
  styleUrl: './hotel-showcase.component.css'
})
export class HotelShowcaseComponent {
  
  //@Input({ alias: 'inputHotel' }) hotel?: Hotel ;

  @Input({ alias: 'inputHotel' }) hotel?: Hotel;
  
        ngOnInit(): void {
          for (let a in this.hotel) {
            console.log(a);
          }

         }
  //@Input({ alias: 'hotName' }) hotelName?: String;
}
