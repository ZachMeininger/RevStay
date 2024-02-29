import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
        fetchData();

        const CustomerAccount = {
          customerId: this.customerId,
          customerFirst: this.customerFirst,
          customerLast: this.customerLast,
          userId: localStorage.getItem("userId")
        };
    }

    async function fetchData() {

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
            window.alert("Sucess!!! Account Created");
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
