import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  // Data
  notifications

  // Checker
  isNotificationsEmpty = true

  // Image
  iconError = 'assets/img/icon/error-404.svg'

  constructor() { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    console.log(this.isNotificationsEmpty)

  }

}
