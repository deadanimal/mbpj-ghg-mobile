import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  // Image
  imgMBPJ = 'assets/img/organization/mbpj-logo.png'
  imgSmartPJ = 'assets/img/organization/smart-pj.png'

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    let navigationPath = path
    this.router.navigate([navigationPath])
  }

}
