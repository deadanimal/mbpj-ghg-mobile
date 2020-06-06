import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { ActionSheetController } from '@ionic/angular';

import { Areas } from 'src/assets/data/areas';
import { Occupants } from 'src/assets/data/occupants';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  // Type
  houseTypes = [
    { value: '', text: '' },
    { value: '', text: '' },
    { value: '', text: '' },
    { value: '', text: '' },
    { value: '', text: '' }
  ]

  areaOptions = Areas
  occupantOptions = Occupants

  // Checker
  isLoading: boolean = false

  // Data
  imageSelected: string

  
  constructor(
    private authService: AuthService,
    private houseService: HousesService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.houseForm = this.fb.group({
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      postcode: new FormControl('', Validators.compose([
        Validators.required
      ])),
      area: new FormControl('', Validators.compose([
        Validators.required
      ])),
      building_type: new FormControl('', Validators.compose([
        Validators.required
      ])),
      assessment_tax_account: new FormControl('', Validators.compose([
        Validators.required
      ])),
      assessment_tax_doc: new FormControl('', Validators.compose([
        Validators.required
      ])),
      staying_duration_since: new FormControl('', Validators.compose([
        Validators.required
      ])),
      occupants: new FormControl('', Validators.compose([
        Validators.required
      ])),
      active: new FormControl('True', Validators.compose([
        Validators.required
      ]))
    })
  }

  submit() {

  }

  async openUploadSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Gallery',
          icon: 'Selecteds-outline',
          handler: () => {
            this.openGallery()
          }
        },
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.openCamera()
          }
        },
        {
          text: 'Cancel',
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  openGallery() {
    // console.log('Gallery opened')
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 60,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
          this.imageSelected = file_uri
        },
        (err) => {
          console.log(err
        )}
      );
  }

  openCamera() {
    // console.log('Camera opened')
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageSelected = imageData;
      //this.tempImage[billNumber] = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      alert("error " + JSON.stringify(err))
    })
  }

}
