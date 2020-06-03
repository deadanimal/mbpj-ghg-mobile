import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Image
  imgMBPJ = 'assets/img/organization/mbpj-logo.png'
  imgSmartPJ = 'assets/img/organization/smart-pj.png'

  // Form
  loginForm: FormGroup;
  loginFormMessages = {
    'username': [
      { type: 'required', message: 'NRIC/Passport is required' },
      { type: 'pattern', message: 'Please enter a valid NRIC/passport' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'At least 8 characters long' }
    ]
  };

  // Checker
  isLoading: boolean = false

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private toastr: NotifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
    });
  }

  tryLogin(value) {
    console.log(value)
  }

  login() {
    this.isLoading = true
    console.log(this.loginForm.value)
    this.navigateHomePage()
    /*
    this.authService.obtainToken(this.loginForm.value).subscribe(
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
        this.toastr.openToastr('Welcome back')
        this.loginForm.reset()
        this.navigateHomePage()
      }
    )
    */
  }

  navigateHomePage() {
    this.router.navigate(['/core/home'], {
      replaceUrl: true
    })
  }

  navigateForgotPage() {
    this.router.navigate(['/auth/forgot'])
  }

  navigateRegisterPage() {
    this.router.navigate(['/auth/register'])
  }

}
