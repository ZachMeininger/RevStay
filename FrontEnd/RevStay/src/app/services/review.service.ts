import { Injectable } from '@angular/core';
import {Review} from '../models/review'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  async newReview(review : Review){

    const reviewFetch ={
      method: "POST",
      body: JSON.stringify(review),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    }
   
    let response = await fetch("http://localhost:8080/newReview", reviewFetch )
   
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
   
    let response = await fetch("http://localhost:8080/allReview", allReviewFetch )
   
    //response should be the successfully added review object
    let json = await response.json();
    return json;
    //return json.stringify; 
  };
}
