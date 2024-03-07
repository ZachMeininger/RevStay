import { Component,ElementRef,EventEmitter,Output } from '@angular/core';
import { Observable, from } from 'rxjs';
import {Hotel} from '../../models/hotel';
import { HotelService } from 'app/services/hotel.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  providers: [HotelService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  hotel! : Hotel;
  hotelList$!: Observable<Hotel[]>;

  @Output() search = new EventEmitter<string>();

  constructor(private el : ElementRef, private hotelService : HotelService){}

  searchValues():void{

    const searchBar = this.el.nativeElement.querySelector("#searchBar");

    //this.hotel.hotelName = searchBar.value;
    //console.log("searching");
    //this.hotelList$ = from(this.hotelService.searchHotels(this.hotel));
    //this.search.emit(this.hotelList$);
    this.search.emit(searchBar.value);
  }

}
