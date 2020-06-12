import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { HousesService } from 'src/app/shared/services/houses/houses.service';
import { ActionSheetController } from '@ionic/angular';

import { Areas } from 'src/assets/data/areas';
import { Houses } from 'src/assets/data/houses';
import { Occupants } from 'src/assets/data/occupants';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';
import { Base64 } from '@ionic-native/base64/ngx';
import { Router } from '@angular/router';

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
  houseOptions = [
    { value: 'CD', text: 'Condominium' },
    { value: 'FL', text: 'Flat' },
    { value: 'TO', text: 'Townhouse' },
    { value: 'TE', text: 'Terrace House' },
    { value: 'BS', text: 'Bungalow / Semidetached' },
    { value: 'AS', text: 'Apartment / Service Apartment' }
  ]
  areaOptions = Areas
  occupantOptions = Occupants
  // houseOptions = Houses

  // Checker
  isLoading: boolean = false

  // Data
  imageSelected: string
  imageSelectedPreview: string

  
  constructor(
    private authService: AuthService,
    private houseService: HousesService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private toastr: NotifyService,
    private base64: Base64,
    private router: Router
  ) { }

  ngOnInit() {
    this.houseForm = this.fb.group({
      owner: new FormControl('', Validators.compose([
        // Validators.required
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
      ])),
      active: new FormControl('True', Validators.compose([
        Validators.required
      ]))
    })
    this.houseForm.controls['owner'].setValue(this.authService.userID)
  }

  submit() {
    this.isLoading = true
    this.houseService.create(this.houseForm.value).subscribe(
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
        this.toastr.openToastr('Home successfully registered')
        this.navigatePage('/core/home')
      }
    )

    console.log(this.houseForm.value)
  }

  async openUploadSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Gallery',
          icon: 'images-outline',
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
      mediaType: this.camera.MediaType.PICTURE,   
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(
        (file_uri) => {
          this.imageSelected = file_uri
          // this.encodeImage()
          this.imageSelectedPreview = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected);
          // this.imageSelectedPreview = 'data:image/jpeg;base64,' + this.imageSelected
          this.houseForm.controls['assessment_tax_doc'].setValue(this.imageSelectedPreview)
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
      this.imageSelectedPreview = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected);
      this.houseForm.controls['assessment_tax_doc'].setValue(this.imageSelectedPreview)
    }, (err) => {
      alert("error " + JSON.stringify(err))
    })
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  // encodeImage() {
  //   console.log('Start encode')
  //   this.base64.encodeFile(this.imageSelected).then(
  //     (encodedFile: string) => {
  //       this.imageSelectedPreview = encodedFile
  //       console.log(this.imageSelectedPreview)
  //     }
  //   )
  // }

}
