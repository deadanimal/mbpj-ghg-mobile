import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/shared/services/applications/applications.model';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.page.html',
  styleUrls: ['./applications.page.scss'],
})
export class ApplicationsPage implements OnInit {

  // Data
  applications: Application[] = []

  // Checker
  isApplicationsEmpty = true

  // Image
  iconError = 'assets/img/icon/error-404.svg'

  constructor(
    private applicationService: ApplicationsService,
    private authService: AuthService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
  }

  getData() {
    if (this.authService.userType == 'AP') {
      this.applicationService.getAll().subscribe(
        () => {
          this.applications = this.applicationService.applications
        }
      )
    }
  }

}
