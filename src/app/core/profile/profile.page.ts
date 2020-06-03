import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  // Data
  user: User

  // Language
  selectedLanguage: string
  languageTypes = [
    { value: 'en', text: 'English' },
    { value: 'bm', text: 'Bahasa Malaysia' }
  ]

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  getData() {
    this.userService.getCurrentUser(this.authService.userID).subscribe(
      () => { this.user = this.userService.userCurrent },
      () => {},
      () => {}
    )
  }

}
