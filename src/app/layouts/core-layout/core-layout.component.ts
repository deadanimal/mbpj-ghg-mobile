import { Component, OnInit } from '@angular/core';

import { Applicant, Evaluator } from '../../shared/menu/menu-list';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/shared/services/users/users.model';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.scss'],
})
export class CoreLayoutComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = Applicant
  user: User

  // Checker
  isProfileComplete: boolean = false

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private alertCtrl: AlertController,
    private router: Router
  ) {
    if (this.authService.userRole == 1) {
      this.appPages = Applicant
    }
    else if (this.authService.userRole == 2) {
      this.appPages = Evaluator
    }
    if (this.authService.userID) {
      
    }
  }

  ngOnInit() {
    const path = window.location.pathname
    // console.log(path)
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.url === path);
      // console.log(this.selectedIndex)
    }

    this.checkProfile()
  }

  selectPage(index: number) {
    this.selectedIndex = index
  }

  checkProfile() {
    console.log('Profile Checker')
    this.userService.getCurrentUser(this.authService.userID).subscribe(
      () => {
        this.user = this.userService.userCurrent
      },
      () => {},
      () => {
        console.log('Nak check', this.user)
        if (
          this.user.full_name == '' ||
          this.user.mobile == '' ||
          this.user.phone == '' ||
          this.user.nric_doc == null
        ) {
          console.log('After check')
          this.incompleteAlert()
        }
      }
    )
  }

  async incompleteAlert() {
    console.log('Alert')
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      message: 'You have an incomplete profile, please complete your profile',
      buttons: [
        {
          text: 'Edit profile',
          handler: () => {
            // console.log('Button clicked')
            this.navigatePage('/information')
          }
        }
      ]
    })
    await alert.present();
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  logout() {
    console.log('Logout')
    this.router.navigate(['/auth/login'])
  }

}
