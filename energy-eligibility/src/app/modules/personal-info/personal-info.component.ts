import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageFormService } from '../../services/manage-form-service';
import { CivilityEnum } from 'src/app/models/personal-info-model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})

export class PersonalInfoComponent implements OnInit {
  form: FormGroup;
  civilityChoices = Object.values(CivilityEnum);
  submitted = false;

  constructor(
    private router: Router,
    private formService: ManageFormService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      civility: [CivilityEnum.Other, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]]
    });
  }

  ngOnInit(): void {
    this.formService.currentPersonalInfoForm.subscribe(form => this.form.patchValue(form));
  }

  next(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.formService.changePersonalInfoForm(this.form.value);
      this.router.navigate(['/project/info']);
    }
  }
}
