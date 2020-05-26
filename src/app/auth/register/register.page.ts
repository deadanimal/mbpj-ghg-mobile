import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // Form
  registerForm: FormGroup;
  registerFormMessages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'pattern', message: 'Enter a valid name.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'At least 6 characters long.' }
    ]
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastCtrl: ToastController,
    public menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(false); //Disable lateral menu

    this.registerForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  tryRegister(value) {
    /*
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);

        this.showToast("Your account has been created");
        this.router.navigate(["/login"]);

      }, err => {
        console.log(err);
        if (err.code === 'auth/email-already-in-use') {
          this.showToast(value.email + " is already in use. Try another.");
        } else {
          this.showToast("There was an error. Please try again.");
        }
      })
    */
  }

  register() {
    this.authService.registerAccount(this.registerForm.value).subscribe(
      () => {
        // Success
      },
      () => {
        // Failed
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
