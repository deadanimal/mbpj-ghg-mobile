import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Application } from 'src/app/shared/services/applications/applications.model';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public folder: string;
  public role: string = ''

  // Checker
  isApplication?: boolean = false

  // Data
  applications: Application[] = []
  id_serial = 21412
  created_at = '22/04/2020'

  // Image
  card1 = ''
  iconError = 'assets/img/icon/error-404.svg'

  constructor(
    private activatedRoute: ActivatedRoute,
    private applicationService: ApplicationsService,
    private router: Router
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getData() {
    this.applicationService.getAll().subscribe(
      () => {
        this.applications = this.applicationService.applications
      },
      () => {},
      () => {}
    )
  }

  navigatePage(path: string) {
    this.router.navigate(['/core/' + path])
  }

  navigateApplication(application: Application) {
    this.router.navigate(['/core/application-detail/', application])
  }

}
