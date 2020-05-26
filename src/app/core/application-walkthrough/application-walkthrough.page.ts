import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-walkthrough',
  templateUrl: './application-walkthrough.page.html',
  styleUrls: ['./application-walkthrough.page.scss'],
})
export class ApplicationWalkthroughPage implements OnInit {

  // Slider
  slidesOptions = {
    initialSlide: 0,
    speed: 400
  }

  // Data
  pages = [
    {
      title: 'Reusable bag',
      text: 'Use reusable bag to reduce the usage of plastic bag',
      path: 'assets/img/ecocon/10-bag.svg'
    },
    {
      title: 'Reusable paper',
      text: 'Use reusable paper to reduce trees exploitation',
      path: 'assets/img/ecocon/26-paper-reuse.svg'
    },
    {
      title: 'Electric car',
      text: 'Use electric car to reduce air pollution',
      path: 'assets/img/ecocon/17-electric-car.svg'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
