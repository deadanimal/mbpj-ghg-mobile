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
    { image: 'assets/img/ecocon/03-eco-earth.svg', text: 'Together to help save the earth' },
    { image: 'assets/img/ecocon/28-pure-nature.svg', text: 'Greening the earth' }
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
    let navigationPath = path
    this.router.navigate([navigationPath])
  }

}
