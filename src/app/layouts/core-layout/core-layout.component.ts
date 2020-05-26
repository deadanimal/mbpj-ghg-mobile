import { Component, OnInit } from '@angular/core';

import { Applicant, Evaluator } from '../../shared/menu/menu-list';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.scss'],
})
export class CoreLayoutComponent implements OnInit {

  public selectedIndex = 0;
  public appPages = Applicant

  constructor(
    private authService: AuthService
  ) {
    if (this.authService.userRole == 1) {
      this.appPages = Applicant
    }
    else if (this.authService.userRole == 2) {
      this.appPages = Evaluator
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

}
