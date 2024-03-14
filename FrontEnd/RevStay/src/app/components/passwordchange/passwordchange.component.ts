import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-passwordchange',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './passwordchange.component.html',
  styleUrl: './passwordchange.component.css'
})
export class PasswordchangeComponent {

  constructor(private router: Router) {}

  userId: Number = 0;
  userEmail: String = '';
  userPassword: String = '';
  securityQuestion: String = '';
  securityAnswer: String  = '';
  accountType: Number = 0;

  handleChange() {
    const UserAccount = {
      userId: this.userId,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      securityQuestion: this.securityQuestion,
      securityAnswer: this.securityAnswer,
      accountType: this.accountType
    };

    fetchData(this.router);

    async function fetchData(router : any) {

      let response = await fetch("http://ec2-18-191-108-249.us-east-2.compute.amazonaws.com:8080/passChange", {
      method: "PATCH",
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
          router.navigate(['/login']);
      }
  }
  }
}
