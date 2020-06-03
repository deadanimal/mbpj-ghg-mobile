import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  // Image
  imgMBPJ = 'assets/img/organization/mbpj-logo.png'
  imgSmartPJ = 'assets/img/organization/smart-pj.png'

  // Data
  email: string = ''

  // Form
  resetForm: FormGroup
  resetFormMessage = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'A valid email is required' }
    ]
  }

  // Loading 
  loadingMessage: HTMLIonLoadingElement

  // Checker
  isLoading: boolean = false


  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ]))
    })
  }

  reset() {
    this.isLoading = true
    this.authService.resetPassword(this.resetForm.value).subscribe(
      () => {
        // console.log('Reset success')
        this.isLoading = false
      },
      () => {
        // console.log('Reset unsuccessful')
        this.isLoading = false
      },
      () => {
        // console.log('After that')
        this.resetForm.reset()
        this.successMessage() 
      }
    )
  }
 
  successMessage() {
    let message = 'Reset password successful, a link is sent to your email'
    this.notifyService.openToastr(message)
  }

}
