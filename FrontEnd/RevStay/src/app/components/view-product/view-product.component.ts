import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-product',
  standalone: true,
  imports: [],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.css'
})
export class ViewProductComponent {
  hotelName : String = "";


  fillPage():void{
    
    const currentHotel = {
      hName: this.hotelName
    };
  
    const productFetch ={
      method: "POST",
      body: JSON.stringify(currentHotel),
      headers: {"Content-type": "application/json; charset=UTF-8"},
    }
  
    fetch("http://localhost:8080/HotelDetails", )
  
    .then((response) => response.json())
    .then((json) => console.log(json));

  };

  

}
