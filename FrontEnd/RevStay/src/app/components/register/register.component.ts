import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private router: Router) {}
  
  
  userId: Number = 0;
  userEmail: String = '';
  userPassword: String = '';
  securityQuestion: String = '';
  securityAnswer: String  = '';
  accountType: Number = 0;

  customerId: Number = 0;
  customerFirst: String = '';
  customerLast: String = '';

  handleReg(): void {
    const UserAccount = {
      userId: this.userId,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      securityQuestion: this.securityQuestion,
      securityAnswer: this.securityAnswer,
      accountType: this.accountType
    };

    const CustomerAccount = {
      customerId: this.customerId,
      customerFirst: this.customerFirst,
      customerLast: this.customerLast,
      userId: sessionStorage.getItem("userId")
    };

    

    console.log(UserAccount);

    if((UserAccount.userEmail).length < 12 || (UserAccount.userEmail).length > 100)
    {

    }
    else if((UserAccount.userPassword).length < 6 || (UserAccount.userPassword).length > 100)
    {

    }
    else if((UserAccount.securityQuestion).length < 1)
    {

    }
    else if((UserAccount.securityAnswer).length < 1)
    {

    }
    else
    {
      fetchData(this.router);
    }

    async function fetchData(router : any) {

        let response = await fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify(UserAccount),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        if(response.status >= 500)
        {
            console.log("Error");
        }
        else if(response.status >= 400 && response.status < 500)
        {

        }
        else
        {
            let data = await response.json();
            console.log(data);
            sessionStorage.setItem("userId", data.userId);
            sessionStorage.setItem("loggedIn", data.accountType);
            if(data.accountType == 0)
            {
              CustomerAccount.userId = data.userId;

              fetchDataCust(router);
            }
            else if(data.accountType == 1)
            {
              
            }
        }
    }

    async function fetchDataCust(router : any) {
      let response = await fetch("http://localhost:8080/registerCustomer", {
      method: "POST",
      body: JSON.stringify(CustomerAccount),
      headers: {"Content-type": "application/json; charset=UTF-8"}
      })

      if(response.status >= 500)
      {
          console.log("Error");
      }
      else if(response.status >= 400 && response.status < 500)
      {

      }
      else
      {
          let data = await response.json();
          console.log(data);
          window.alert("Success!!! Account Created");
          router.navigate(['/home']);
      }
    }

  }

  handleType(): void {
    if(this.accountType == 0)
    {
      this.accountType = 1;
    }
    else if(this.accountType == 1)
    {
      this.accountType = 0;
    }
  }

}
