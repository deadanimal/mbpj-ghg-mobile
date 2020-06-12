import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ActionSheetController } from '@ionic/angular';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

import { Vehicles } from 'src/assets/data/vehicles';

@Component({
  selector: 'app-application-apply',
  templateUrl: './application-apply.page.html',
  styleUrls: ['./application-apply.page.scss'],
})
export class ApplicationApplyPage implements OnInit {

  // Image
  imgConstruction = 'assets/img/default/Construction.png';

  // Form
  applicationForm: FormGroup

  // Loading
  isLoading: boolean = false

  // Data
  imageSelected: string

  // Type
  vehicleOptions = Vehicles
  
  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private toastr: NotifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.applicationForm = this.fb.group({
      applicant: new FormControl('', Validators.compose([
        Validators.required
      ])),
      applied_house: new FormControl('', Validators.compose([
        Validators.required
      ])),
      total_lamp: new FormControl('', Validators.compose([
        Validators.required
      ])),
      total_led: new FormControl('', Validators.compose([
        Validators.required
      ])),
      vehicle_car: new FormControl('', Validators.compose([
        Validators.required
      ])),
      vehicle_motorcycle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      vehicle_bicycle: new FormControl('', Validators.compose([
        Validators.required
      ])),
      vehicle_other: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_month: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_usage: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_doc: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_month: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_usage: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_doc: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_month: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_usage: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_doc: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_1_month: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_1_usage: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_1_doc: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_2_month: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_2_usage: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_2_doc: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_3_month: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_3_usage: new FormControl('True', Validators.compose([
        Validators.required
      ])),
      water_bill_3_doc: new FormControl('True', Validators.compose([
        Validators.required
      ]))
    })
    this.applicationForm.controls['applicant'].setValue(this.authService.userID)
  }

  confirm() {

  }

  submit() {
    // this.isLoading = true
    // this.applicationService.create(this.applicationForm.value).subscribe(
    //   () => {},
    //   () => {},
    //   () => {}
    // )
    this.toastr.openToastr('Your application has been submitted!')
    this.navigatePage('/core/home')
  }

  draft() {

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

  navigatePage(path: string) {
    this.router.navigate([path])
  }

}
