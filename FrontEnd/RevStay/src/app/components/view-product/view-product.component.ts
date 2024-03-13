import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Hotel } from '../../models/hotel';
import { Review } from '../../models/review';
import {ReviewService} from '../../services/review.service'
import { from,Observable,map } from 'rxjs';
import { Router } from '@angular/router';


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
 

  constructor(private el : ElementRef, private reviewService : ReviewService, private router: Router){
    this.hotelString = sessionStorage.getItem("Current_Hotel");
    this.hotelString = (this.hotelString.replace('"{', '{')).replace('}"', '}');
    this.hotelObject = JSON.parse(this.hotelString);
    this.rating = 0;
  }

  addFavorite(){

    const hotel_id = this.hotelObject.hotelId;
    let check_customer = sessionStorage.getItem("userId");
    let customer_id = 0;

    if(check_customer != null){
      customer_id = +sessionStorage.getItem("userId")!;
    
    
      this.reviewService.newFavorite(hotel_id,customer_id);
      let star = this.el.nativeElement.querySelector("#star")
  
      star.setAttribute("style", "color:darkgoldenrod; margin-left: 10px;");
    }
  }

  ngOnInit():void{
    
    from(this.reviewService.allReviews(this.hotelObject.hotelId))
    .subscribe((reviews) => {
       this.hotelReviews = reviews;
    });
    
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
    location.reload();

  }

  goToRoomsPage() {
    this.router.navigate([`/hotelrooms/${this.hotelObject.hotelId}`])

  }
     
      

   
}
