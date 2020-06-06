import { Component, OnInit } from '@angular/core';
import { ApplicationsService } from 'src/app/shared/services/applications/applications.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  
  constructor(
    private applicationService: ApplicationsService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.applicationForm = this.fb.group({
      applicant: new FormControl('', Validators.compose([
        Validators.required
      ])),
      evaluator_nominated: new FormControl('', Validators.compose([
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
  }

  confirm() {

  }

  submit() {

  }

  draft() {

  }

}
