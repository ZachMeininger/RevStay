import { Injectable } from '@angular/core';
import {Review} from '../models/review'
import {Favorite} from '../models/favorite'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  async newReview(review : Review){
    if(sessionStorage.getItem("userId") != null){
      review.customerId  +=+sessionStorage.getItem("user_id")!;
    }
    

    const reviewFetch ={
      method: "POST",
      body: JSON.stringify(review),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    }
   
    let response = await fetch("http://ec2-18-191-108-249.us-east-2.compute.amazonaws.com:8080/newReview", reviewFetch )
   
    //response should be the successfully added review object
    let json = await response.json();
    return json;
    //return json.stringify; 
  };

  async newFavorite(hotel_id : number, customer_id : number){

    let thisFavorite : Favorite = {
      hotelId : hotel_id,
      customerId:customer_id
    }

    console.log(thisFavorite);

    const sendFavorite ={
      method: "POST",
      body: JSON.stringify(thisFavorite),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    }
   
    let response = await fetch("http://ec2-18-191-108-249.us-east-2.compute.amazonaws.com:8080/newFavorite", sendFavorite )
   
    //response should be the successfully added review object
    let json = await response.json();
    return json;
    //return json.stringify; 
  };


  async allReviews(hotel_id: number){

    const allReviewFetch ={
      method: "POST",
      body: JSON.stringify(hotel_id),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    }
   
    let response = await fetch("http://ec2-18-191-108-249.us-east-2.compute.amazonaws.com:8080/allReview", allReviewFetch )
   
    //response should be the successfully added review object
    let json = await response.json();
    return json;
    //return json.stringify; 
  };
}
