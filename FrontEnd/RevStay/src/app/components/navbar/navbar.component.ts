import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  loggedIn: Number = 2;

  ngOnInit(){
    this.checkAccount();
  }
  
  checkAccount(): void {
    console.log(sessionStorage.getItem("loggedIn"));
    if(sessionStorage.getItem("loggedIn") != null)
    {
      this.loggedIn = Number(sessionStorage.getItem("loggedIn"));
    }
    
  }
}
