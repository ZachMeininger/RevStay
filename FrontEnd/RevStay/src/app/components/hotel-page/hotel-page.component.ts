import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Room } from '../../models/room'

@Component({
  selector: 'app-hotel-page',
  standalone: true,
  imports: [],
  templateUrl: './hotel-page.component.html',
  styleUrl: './hotel-page.component.css'
})
export class HotelPageComponent {
  constructor(
    private route: ActivatedRoute
  ) {}

  getHotel():void {
    
  }

}
