import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';

@Component({
  selector: 'app-my-home-add',
  templateUrl: './my-home-add.page.html',
  styleUrls: ['./my-home-add.page.scss'],
})
export class MyHomeAddPage implements OnInit {

  // Image
  imgConstruction = 'assets/img/default/Construction.png';

  // Form
  houseForm: FormGroup

  //
  houseTypes = [
    { value: '', text: '' },
    { value: '', text: '' },
    { value: '', text: '' },
    { value: '', text: '' },
    { value: '', text: '' }
  ]
  
  constructor(
    private authService: AuthService,
    private houseService: HousesService,

  ) { }

  ngOnInit() {
  }

}
