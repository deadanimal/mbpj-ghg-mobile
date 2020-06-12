import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { ActionSheetController } from '@ionic/angular';

import { Areas } from 'src/assets/data/areas';
import { Occupants } from 'src/assets/data/occupants';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';
import { House } from 'src/app/shared/services/houses/houses.model';

@Component({
  selector: 'app-my-home-detail',
  templateUrl: './my-home-detail.page.html',
  styleUrls: ['./my-home-detail.page.scss'],
})
export class MyHomeDetailPage implements OnInit {

  // Form
  houseForm: FormGroup

  // Type
  houseTypes = [
    { value: 'CD', text: 'Condominium' },
    { value: 'FL', text: 'Flat' },
    { value: 'TO', text: 'Townhouse' },
    { value: 'TE', text: 'Terrace House' },
    { value: 'BS', text: 'Bungalow / Semidetached' },
    { value: 'AS', text: 'Apartment / Service Apartment' }
  ]
  areaOptions = Areas
  occupantOptions = Occupants

  // Checker
  isLoading: boolean = false

  // Data
  house: House
  imageSelected: string

  constructor(
    private authService: AuthService,
    private houseService: HousesService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private toastr: NotifyService
  ) { }

  ngOnInit() {
    this.houseForm = this.fb.group({
      owner: new FormControl('', Validators.compose([
        Validators.required
      ])),
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
      ]))
    })
    this.houseForm.controls['address'].setValue(this.authService.userID)
    this.houseForm.controls['postcode'].setValue(this.authService.userID)
    this.houseForm.controls['area'].setValue(this.authService.userID)
    this.houseForm.controls['building_type'].setValue(this.authService.userID)
    this.houseForm.controls['assessment_tax_account'].setValue(this.authService.userID)
    this.houseForm.controls['assessment_tax_doc'].setValue(this.authService.userID)
    this.houseForm.controls['staying_duration_since'].setValue(this.authService.userID)
    this.houseForm.controls['occupants'].setValue(this.authService.userID)
  }

  update() {
    this.isLoading = true
    this.houseService.update(this.house.id, this.houseForm.value).subscribe(
      () => {
        // Success
        this.isLoading = false
      },
      () => {
        // Failed
        this.isLoading = false
      },
      () => {
        // After
        this.houseForm.reset()
        this.toastr.openToastr('')
      }
    )
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
