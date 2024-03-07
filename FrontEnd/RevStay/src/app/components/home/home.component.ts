import { Component, OnInit,Output, EventEmitter } from '@angular/core';

//service, component, model
import { HotelService } from 'app/services/hotel.service';
import {HotelShowcaseComponent} from '../hotel-showcase/hotel-showcase.component';
import {SearchComponent} from '../search/search.component';
import {FilterComponent} from '../filter/filter.component';
import { Hotel } from 'app/models/hotel';

import { Observable, from } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HotelShowcaseComponent,FilterComponent,SearchComponent,AsyncPipe, CommonModule],
  providers: [HotelService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  //dummydata!: Hotel;
  //alldummydata!: Hotel[];

  hotelList$!: Observable<Hotel[]>;

  filterType!:string;
  filterValue!:string|number;

  searchText!: string;
  searchValue$!: Observable<Hotel[]>;

  filterResults:Hotel[] = [];
  filterArray!:Hotel[];


  constructor(private hotelService: HotelService) {}

  

  ngOnInit(): void {
    //this.loadTestHotel();
    //this.loadTestHotels();
    this.loadHotels("","");
    
  }

//=====================================================================================================================================
  
  loadHotels(filterType:string,filterValue:string|number):void{
    
    this.hotelList$ = from(this.hotelService.getAllHotels(filterType,filterValue,this.searchText));
    
  }

//=====================================================================================================================================

  addSearch(newSearch : string):void{
    this.searchText = newSearch;
    this.loadHotels(this.filterType,this.filterValue);
    //this.loadHotels()
  }

//=====================================================================================================================================

  addFilters(newFilterType : string):void{
    this.filterType = newFilterType;
  }

//=====================================================================================================================================

  addFiltersValue(newFilterValue : string):void{
    switch(this.filterType){
      case "location":
        this.filterValue = newFilterValue;
        break;
      case "price":
        this.filterValue = Number(newFilterValue);
        break;
      default:
        this.filterValue = "error";
        break;
    }
    this.loadHotels(this.filterType,this.filterValue);
    //console.log(this.filterValue);
  
  }

  //=====================================================================================================================================
  
  clearValues():void{
    
    this.filterType = "";
    this.filterValue = "";
    this.searchText = "";
    this.loadHotels(this.filterType,this.filterValue);
    
  }

//=====================================================================================================================================

//=====================================================================================================================================
  /* For TESTS
  loadTestHotel(){
    this.dummydata = this.hotelService.getHotel();
  }
  loadTestHotels(){
    this.alldummydata = this.hotelService.getHotels();
  }
  */
}
