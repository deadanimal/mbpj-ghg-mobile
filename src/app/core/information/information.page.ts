import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  // Checker
  isEdit = false
  isSaving = false

  // Data
  user: User
  img: any
  imageSelected: string
  imageSelectedPreview: string

  // Form
  userForm: FormGroup

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private fb: FormBuilder,
    private actionSheetCtrl: ActionSheetController,
    private camera: Camera
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      full_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
      ])),
      nric_old: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nric_new: new FormControl('', Validators.compose([
        Validators.required
      ])),
      nric_doc: new FormControl('', Validators.compose([
        Validators.required
      ])),
      mobile: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      occupation: new FormControl('', Validators.compose([
        Validators.required
      ])),
      gender: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  }

  getData() {
    this.userService.getCurrentUser(this.authService.userID).subscribe(
      () => { this.user = this.userService.userCurrent },
      () => {},
      () => {}
    )
  }

  edit() {
    this.isEdit = true
  }

  save() {
    this.isSaving = true
    
    if (!this.userForm.value.full_name) {
      this.userForm.controls['full_name'].setValue(this.user.full_name)
    }
    if (!this.userForm.value.email) {
      this.userForm.controls['email'].setValue(this.user.email)
    }
    if (!this.userForm.value.nric_old) {
      this.userForm.controls['nric_old'].setValue(this.user.nric_old)
    }
    if (!this.userForm.value.nric_new) {
      this.userForm.controls['nric_new'].setValue(this.user.nric_new)
    }
    if (!this.userForm.value.mobile) {
      this.userForm.controls['mobile'].setValue(this.user.mobile)
    }
    if (!this.userForm.value.phone) {
      this.userForm.controls['phone'].setValue(this.user.phone)
    }
    if (!this.userForm.value.occupation) {
      this.userForm.controls['occupation'].setValue(this.user.occupation)
    }
    if (!this.userForm.value.gender) {
      this.userForm.controls['gender'].setValue(this.user.gender)
    }

    this.submit()
  }

  submit() {
    this.userService.update(this.user.id).subscribe(
      () => {},
      () => {},
      () => {
        this.isSaving = false
      }
    )
  }

  async openUploadSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Upload NRIC / passport',
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
          // this.houseForm.controls['assessment_tax_doc'].setValue(this.imageSelectedPreview)
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
      // this.houseForm.controls['assessment_tax_doc'].setValue(this.imageSelectedPreview)
    }, (err) => {
      alert("error " + JSON.stringify(err))
    })
  }

}
