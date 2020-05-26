import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/services/users/users.model';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { AlertController, ActionSheetController } from '@ionic/angular';

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

  // Form
  userForm: FormGroup

  constructor(
    private authService: AuthService,
    private userService: UsersService,
    private fb: FormBuilder,
    private actionSheetCtrl: ActionSheetController
  ) { 
    this.getData()
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      full_name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.email
      ])),
      nric_old: new FormControl('', Validators.compose([
        Validators.required
      ])),
      mobile: new FormControl('', Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      occupation: new FormControl('', Validators.compose([
      ])),
      gender: new FormControl('', Validators.compose([
      ]))
    })
  }

  getData() {
    this.userService.getCurrentUser(this.authService.userID).subscribe(
      () => {
        this.user = this.userService.userCurrent
      },
      () => {},
      () => {}
    )
  }

  edit() {
    this.isEdit = !this.isEdit
  }

  save() {
    this.isSaving = !this.isSaving
  }

  async getImage() {
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
        },{
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
    console.log('Gallery opened')
  }

  openCamera() {
    console.log('Camera opened')
  }



}
