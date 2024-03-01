import { Component, OnInit  } from '@angular/core';

//service, component, model
import { HotelService } from 'app/services/hotel.service';
import {HotelShowcaseComponent} from '../hotel-showcase/hotel-showcase.component';
import { Hotel } from 'app/models/hotel';

import { Observable, from } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HotelShowcaseComponent,AsyncPipe, CommonModule],
  providers: [HotelService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  dummydata!: Hotel;
  alldummydata!: Hotel[];

  hotelList$!: Observable<Hotel[]>;


  constructor(private hotelService: HotelService) {}

  

  ngOnInit(): void {
    //this.loadTestHotel();
    //this.loadTestHotels();
    this.loadHotels();
    
  }
  loadHotels():void{
    
    this.hotelList$ = from(this.hotelService.getAllHotels());
  
  }
  /* For TESTS
  loadTestHotel(){
    this.dummydata = this.hotelService.getHotel();
  }
  loadTestHotels(){
    this.alldummydata = this.hotelService.getHotels();
  }
  */
}
