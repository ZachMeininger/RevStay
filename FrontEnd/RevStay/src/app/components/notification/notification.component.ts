import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  message: string = ''; 

  constructor(private router: Router) { }

  ngOnInit(): void {
    const notificationMessage = sessionStorage.getItem('notificationMessage');
    if (notificationMessage) {
      this.message = notificationMessage; 
      sessionStorage.removeItem('notificationMessage'); 
      setTimeout(() => {
        this.message = ''; 
      }, 5000);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
