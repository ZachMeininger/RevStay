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

  userFirst: String = '';
  userLast: String = '';

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

    fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify(UserAccount),
        headers: {"Content-type": "application/json; charset=UTF-8"},
    })

    .then((response) => response.json())
    .then((json) => console.log(json));
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
