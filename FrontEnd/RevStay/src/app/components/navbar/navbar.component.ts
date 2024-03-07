import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  
  loggedIn: Number = 2;

  ngOnInit(){
    this.checkAccount();
  }
  
  checkAccount(): void {
    if(sessionStorage.getItem("loggedIn") != null)
    {
      this.loggedIn = Number(sessionStorage.getItem("loggedIn"));
    }
  }
}
