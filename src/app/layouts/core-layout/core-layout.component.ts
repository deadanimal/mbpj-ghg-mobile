import { Component, OnInit } from '@angular/core';

import { Applicant, Evaluator } from '../../shared/menu/menu-list';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { User } from 'src/app/shared/services/users/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.scss'],
})
export class CoreLayoutComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = Applicant
  user: User

  constructor(
    private authService: AuthService,
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
  }

  selectPage(index: number) {
    this.selectedIndex = index
  }

  logout() {
    console.log('Logout')
    this.router.navigate(['/auth/login'])
  }

}
