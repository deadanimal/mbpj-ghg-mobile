import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

import { Vehicles } from 'src/assets/data/vehicles';
import { TipsPage } from '../tips/tips.page';

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
  imageSelected1: string
  imageSelected2: string
  imageSelected3: string
  imageSelected4: string
  imageSelected5: string
  imageSelected6: string
  imageSelectedPreview1: string
  imageSelectedPreview2: string
  imageSelectedPreview3: string
  imageSelectedPreview4: string
  imageSelectedPreview5: string
  imageSelectedPreview6: string

  // Type
  vehicleOptions = Vehicles
  
  constructor(
    private authService: AuthService,
    private applicationService: ApplicationsService,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private fb: FormBuilder,
    private popoverCtrl: PopoverController,
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
      vehicle_other: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_month: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_usage: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_1_doc: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_month: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_usage: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_2_doc: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_month: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_usage: new FormControl('', Validators.compose([
        Validators.required
      ])),
      electricity_bill_3_doc: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_1_month: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_1_usage: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_1_doc: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_2_month: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_2_usage: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_2_doc: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_3_month: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_3_usage: new FormControl('', Validators.compose([
        Validators.required
      ])),
      water_bill_3_doc: new FormControl('', Validators.compose([
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

  async openUploadSheet(index: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: '',
      // cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Gallery',
          icon: 'Selecteds-outline',
          handler: () => {
            this.openGallery(index)
          }
        },
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.openCamera(index)
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

  openGallery(index: number) {
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
          if (index == 1) {
            // Electricity bill 1
            this.imageSelected1 = file_uri
            this.imageSelectedPreview1 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected1)
            this.applicationForm.controls['electricity_bill_1_doc'].setValue(this.imageSelected1)
          }
          else if (index == 2) {
            // Electricity bill 2
            this.imageSelected2 = file_uri
            this.imageSelectedPreview2 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected2)
            this.applicationForm.controls['electricity_bill_2_doc'].setValue(this.imageSelected2)
          }
          else if (index == 3) {
            // Electricity bill 3
            this.imageSelected3 = file_uri
            this.imageSelectedPreview3 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected3)
            this.applicationForm.controls['electricity_bill_3_doc'].setValue(this.imageSelected3)
          }
          else if (index == 4) {
            // Water bill 1
            this.imageSelected4 = file_uri
            this.imageSelectedPreview4 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected4)
            this.applicationForm.controls['water_bill_1_doc'].setValue(this.imageSelected4)
          }
          else if (index == 5) {
            // Water bill 2
            this.imageSelected5 = file_uri
            this.imageSelectedPreview5 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected5)
            this.applicationForm.controls['water_bill_2_doc'].setValue(this.imageSelected5)
          }
          else if (index == 6) {
            // Water bill 3
            this.imageSelected6 = file_uri
            this.imageSelectedPreview6 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected6)
            this.applicationForm.controls['water_bill_3_doc'].setValue(this.imageSelected6)
          }
        },
        (err) => {
          console.log(err
        )}
      );
  }

  openCamera(index: number) {
    // console.log('Camera opened')
    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      if (index == 1) {
        // Electricity bill 1
        this.imageSelected1 = imageData
        this.imageSelectedPreview1 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected1)
        this.applicationForm.controls['electricity_bill_1_doc'].setValue(this.imageSelected1)
      }
      else if (index == 2) {
        // Electricity bill 2
        this.imageSelected2 = imageData
        this.imageSelectedPreview2 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected2)
        this.applicationForm.controls['electricity_bill_2_doc'].setValue(this.imageSelected2)
      }
      else if (index == 3) {
        // Electricity bill 3
        this.imageSelected3 = imageData
        this.imageSelectedPreview3 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected3)
        this.applicationForm.controls['electricity_bill_3_doc'].setValue(this.imageSelected3)
      }
      else if (index == 4) {
        // Water bill 1
        this.imageSelected4 = imageData
        this.imageSelectedPreview4 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected4)
        this.applicationForm.controls['water_bill_1_doc'].setValue(this.imageSelected4)
      }
      else if (index == 5) {
        // Water bill 2
        this.imageSelected5 = imageData
        this.imageSelectedPreview5 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected5)
        this.applicationForm.controls['water_bill_2_doc'].setValue(this.imageSelected5)
      }
      else if (index == 6) {
        // Water bill 3
        this.imageSelected6 = imageData
        this.imageSelectedPreview6 = (<any>window).Ionic.WebView.convertFileSrc(this.imageSelected6)
        this.applicationForm.controls['water_bill_3_doc'].setValue(this.imageSelected6)
      }
    }, (err) => {
      alert("error " + JSON.stringify(err))
    })
  }

  navigatePage(path: string) {
    this.router.navigate([path])
  }

  async viewTips(type: any) {
    const popover = await this.popoverCtrl.create({
      component: TipsPage,
      // cssClass: 'my-custom-class',
      componentProps: {
        'type': type
      },
      translucent: true
    });
    return await popover.present();
  }

}
