import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  
  userId: Number = 0;
  userEmail: String = '';
  userPassword: String = '';
  securityQuestion: String = 'a';
  securityAnswer: String  = 'b';
  accountType: Number = 0;

  emailError: Number = 0;

  handleLogin() {
    const UserAccount = {
      userId: this.userId,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      securityQuestion: this.securityQuestion,
      securityAnswer: this.securityAnswer,
      accountType: this.accountType
    };

    if((UserAccount.userEmail).length == 0 || (UserAccount.userPassword).length == 0)
    {
      this.emailError = 1;
    }
    else
    {
        fetchData(this.router);
    }
    
    async function fetchData(router : any) {

        let response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(UserAccount),
        headers: {"Content-type": "application/json; charset=UTF-8"}
        })

        if(response.status >= 400)
        {

        }
        else
        {
            let data = await response.json();
            console.log(data);
            sessionStorage.setItem("userId", data.userId);
            sessionStorage.setItem("loggedIn", data.accountType);
            router.navigate(['/home']);
        }
    }
  }
}
