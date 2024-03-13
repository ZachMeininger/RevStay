import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  constructor(private router: Router) {}

  cardName: String = '';
  cardNum: String = '';
  cardExp: String = '';
  cardCvv: String = ''

  nameError: Number = 0;
  numError: Number = 0;
  expError: Number = 0;
  cvvError: Number = 0;

  handleCheckout() {
    if((this.cardName).length < 3)
    {
      this.nameError = 1;
    }
    else if((this.cardNum).length != 16)
    {
      this.numError = 1;
    }
    else if((this.cardExp).length != 5)
    {
      this.expError = 1;
    }
    else if((this.cardCvv).length != 3)
    {
      this.cvvError = 1;
    }
    else
    {
      this.router.navigate(['/home']);
    }

    
  }
}
