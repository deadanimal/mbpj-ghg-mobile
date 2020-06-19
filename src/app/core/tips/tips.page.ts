import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.page.html',
  styleUrls: ['./tips.page.scss'],
})
export class TipsPage implements OnInit {

  // Data
  @Input() type: string;
  imgPath: string

  constructor() { }

  ngOnInit() {
    if (this.type == 'electricity') {
      this.imgPath = 'assets/img/tips/bill_tnb.png'
    }
  }

}
