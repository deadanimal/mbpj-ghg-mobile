import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Image
  imgMBPJ = 'assets/img/organization/mbpj-logo.png'
  imgSmartPJ = 'assets/img/organization/smart-pj.png'

  // Form
  registerForm: FormGroup;
  registerFormMessages = {
    'username': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password1': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'At least 6 characters long.' }
    ],
    'password2': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ]
  };

  // Checker
  isLoading: boolean = false


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$')
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  register() {
    this.isLoading = true
    this.authService.registerAccount(this.registerForm.value).subscribe(
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
        // this.showToast('Successfully registered your account')
      }
    )
  }

  navigateHomePage() {
    this.showToast('Login in to app')
    this.router.navigate(['/home'])
  }

  navigateLoginPage() {
    this.router.navigate(['/login'])
  }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      header: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
