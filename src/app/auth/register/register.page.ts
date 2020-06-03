import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Router } from '@angular/router';
import { NotifyService } from 'src/app/shared/handlers/notify/notify.service';

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
      { type: 'required', message: 'NRIC/Passport is required' },
      { type: 'pattern', message: 'Enter a valid NRIC/passport' }
    ],
    'password1': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'At least 8 characters long' }
    ],
    'password2': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'At least 8 characters long' }
    ]
  };

  // Checker
  isLoading: boolean = false


  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: NotifyService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*$')
      ])),
      password1: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
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
        this.registerForm.reset()
        this.toastr.openToastr('Successfully registered your account')
      }
    )
  }

  navigateLoginPage() {
    this.router.navigate(['/auth/login'])
  }

}
