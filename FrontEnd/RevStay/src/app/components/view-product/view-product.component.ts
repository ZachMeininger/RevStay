import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Hotel } from '../../models/hotel';
import { Review } from '../../models/review';
import {ReviewService} from '../../services/review.service'
import { from,Observable,map } from 'rxjs';


@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [AsyncPipe,CommonModule],
  providers:[ReviewService],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent implements OnInit {
  hotelObject : Hotel;
  hotelString : any;
  reviewElement: any;
  rating: number;
  hotelReviews! : Review[];
 

  constructor(private el : ElementRef, private reviewService : ReviewService){
    this.hotelString = sessionStorage.getItem("Current_Hotel");
    this.hotelString = (this.hotelString.replace('"{', '{')).replace('}"', '}');
    this.hotelObject = JSON.parse(this.hotelString);
    this.rating = 0;
  }

  ngOnInit():void{
    
    //this.hotelReviews = from(this.reviewService.allReviews(this.hotelObject.hotelId));
    from(this.reviewService.allReviews(this.hotelObject.hotelId))
    .subscribe((reviews) => {
       this.hotelReviews = reviews;
    });
    
    //console.log("Response Below");
    //console.log(this.hotelReviews$);
    //maybe refresh page here? take out ability to review here?
    
  }


  createReview():void{

    this.reviewElement = document.getElementById("reviewSpace");
    if(this.reviewElement.hidden == false){
      this.reviewElement.hidden = true;
    }else{
      this.reviewElement.hidden = false;
    }
  }

  
  finishReview(event : KeyboardEvent):void{
    if(event.code == 'Enter'){
      const reviewString = this.el.nativeElement.querySelector("#inputField") as HTMLInputElement;
      const inValue : string = reviewString.value;
      this.rating +=+(this.el.nativeElement.querySelector("#ratingField") as HTMLInputElement).value;

      //right now there is no way to get customer id
      const review : Review = {
        reviewStar : this.rating,
        reviewBody : inValue,
        hotelId : this.hotelObject.hotelId,
        customerId : 1
      }

      this.sendReview(review);
     
      
     
    }
  }


  sendReview(review : Review):void{

    const response = this.reviewService.newReview(review);

    //console.log("Response Below");
    //console.log(response);

    //maybe refresh page here? take out ability to review here?
  }
     
      

   
}
