import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userId: Number = 0;
  userEmail: String = '';
  userPassword: String = '';
  securityQuestion: String = 'a';
  securityAnswer: String  = 'b';
  accountType: Number = 0;

  handleLogin() {
    const UserAccount = {
      userId: this.userId,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      securityQuestion: this.securityQuestion,
      securityAnswer: this.securityAnswer,
      accountType: this.accountType
    };

    console.log(UserAccount);

    if((UserAccount.userEmail).length == 0 || (UserAccount.userPassword).length == 0)
    {

    }
    else
    {
        fetchData();
    }
    
    async function fetchData() {

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
        }
    }
  }
}
