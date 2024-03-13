import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  
  constructor(private router: Router) {}

  loggedIn: Number = 2;

  ngOnInit(){
    this.checkAccount();
  }
  
  checkAccount(): void {
    if(sessionStorage.getItem("loggedIn") != null)
    {
      this.loggedIn = Number(sessionStorage.getItem("loggedIn"));
    }
    else if(sessionStorage.length == 0)
    {
      this.loggedIn = 2;
    }
  }

  signOutFunc() {
    sessionStorage.clear();

    this.router.navigate(['/']);
  }
}
