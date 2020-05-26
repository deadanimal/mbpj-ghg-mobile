import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {

  // Slider
  @ViewChild('introSlides', {static: false}) introSlides: any
  endReached: boolean = false
  imgLoaded: boolean = false
  sliderConfig = {
    centeredSlides: true,
    initialSlide: 0,
    speed: 400
  }
  slides = [
    { "image": "/assets/img/intro/smarthouse.svg", "text": "Smart home monitoring easier" },
    { "image": "/assets/img/intro/development.svg", "text": "IoT for your smart house" },
    { "image": "/assets/img/intro/events.svg", "text": "Maintenance predictions in your hand" },
    { "image": "/assets/img/intro/calendar.svg", "text": "Manage maintenances and monitor your appliances" }
  ];

  constructor(
    private router: Router,
    public menuCtrl: MenuController
  ) {
  }

  ngOnInit() {
    this.menuCtrl.enable(false) // Disable lateral menu
    this.imgLoaded = false
  }

  next() {
    this.introSlides.slideNext()
  }

  slideDidChange() {
    this.introSlides.isEnd().then(res => {
      this.endReached = res;
    })
  }

  navigatePage(path: string) {
    let navigationPath = '/' + path
    this.router.navigate([navigationPath])
  }

}
