import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userId: Number = 0;
  userEmail: String = '';
  userPassword: String = '';
  securityQuestion: String = 'a';
  securityAnswer: String  = 'b';
  accountType: Number = 0;

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

}
