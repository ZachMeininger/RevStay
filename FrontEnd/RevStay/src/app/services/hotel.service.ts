import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import {HotelShowcaseComponent} from '../components/hotel-showcase/hotel-showcase.component';
import { mockHotel, mockManyHotel } from '../utils/mockData';
import {Hotel} from '../models/hotel';
import {Room} from '../models/room';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HotelService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };
  

  constructor(
    private http : HttpClient
  ) { }
  /*
  //Testing Purposes==========================================
  getHotel(){
    return mockHotel;
  }
  getHotels(){
    return mockManyHotel;
  }
  getAllHotels(): Observable<Hotel[]> {
    //return this.http.get<Hotel[]>(this.plantUrl);
    return mockManyHotel;
  }
  //Testing Purposes==========================================
  */


  //getAllHotels(): Observable<Hotel[]> 


  async getAllHotels()  {
    
    
      const productFetch ={
        method: "GET",
        //body: JSON.stringify(currentHotel),
        headers: {"Content-type": "application/json; charset=UTF-8"},
      }
     
      let response = await fetch("http://localhost:8080/AllHotels", productFetch )
     
      //list of objects (being hotels)
      let json = await response.json();
      return json;
      //return json.stringify; 
    };

  getRoomsByHotelId(hotelId: Number) : Observable<Room[]>  {
     
     const url = `http://localhost:8080/RoomsByHotelId/${hotelId}`;
      return this.http.get<Room[]>(url);
      
    };
}
