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

  async searchHotels(hotel : Hotel)  {
    
    
      const hotelFetch ={
        method: "POST",
        body: JSON.stringify(hotel),
        headers: {"Content-type": "application/json; charset=UTF-8"},
      }
     
      let response = await fetch("http://localhost:8080/named-hotel", hotelFetch )
     
      //list of objects (being hotels)
      let json = await response.json();
      return json;
     
       
  };

  getRoomsByHotelId(hotelId: Number) : Observable<Room[]>  {
     
    const url = `http://localhost:8080/RoomsByHotelId/${hotelId}`;
     return this.http.get<Room[]>(url);
     
   };

   submitBooking() {

   }


  async getAllHotels(filters : string,filterValue:string|number,searchExpected:string)  {

    let jsonMinPrice;
    let jsonMaxPrice;
    let jsonLocation;
    
    
      const productFetch ={
        method: "GET",
        //body: JSON.stringify(currentHotel),
        headers: {"Content-type": "application/json; charset=UTF-8"},
      }
     
      let response = await fetch("http://localhost:8080/AllHotels", productFetch )
     
      //list of objects (being hotels)

      let responseBody = await response.json();

      let searchList : typeof responseBody = [];
      let useSearch = false;
      let returnList : typeof responseBody = [];
      
      if(searchExpected != "" && searchExpected != null){
        for(let a in responseBody){
          if (responseBody[a].hotelName == searchExpected){
            searchList.push(responseBody[a]);
          }
        }
        useSearch = true;
      }
      if(useSearch == false){
        searchList = responseBody;
      }
      for(let a in searchList){

        jsonMinPrice = searchList[a].priceHigh;
        jsonMaxPrice = searchList[a].priceLow;
        jsonLocation = searchList[a].hotelAddress;
       
        switch(filters){
          case "location":
            if(jsonLocation == filterValue){
              returnList.push(searchList[a]);
            }
            break;
          case "price":

            let minMax = (<string>(filterValue)).split("-");
            let minValue =  Number(minMax[0]);
            let maxValue = Number(minMax[1]);
            if(jsonMaxPrice >=  minValue && jsonMinPrice <=  maxValue){
              returnList.push(searchList[a]);
            }
            break;
          default:
            return searchList;
        }
      }
     
      return returnList;
       
  };
}
