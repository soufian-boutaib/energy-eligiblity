import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EligibilityService } from '../../services/eligibility-service';
import { ManageFormService } from '../../services/manage-form-service';
import { PersonalInfo } from '../../models/personal-info-model';
import { ProjectInfo } from '../../models/project-info-model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  personalInfo!: PersonalInfo;
  projectInfo!: ProjectInfo;
  isEligible: boolean = false;
  effyAidAmount: number = 0;

  constructor(
    private router: Router,
    private formService: ManageFormService,
    private eligibilityService: EligibilityService
  ) { }

  ngOnInit(): void {
    this.formService.currentPersonalInfoForm.subscribe(form => {
      this.personalInfo = form;
    });

    this.formService.currentProjectInfoForm.subscribe(form => {
      this.projectInfo = form;
    });
    
    this.calculateEligibility();
  }

  calculateEligibility(): void {
    if (!this.personalInfo || !this.projectInfo) {
      this.router.navigate(['/personal/info']);
      return;
    }

    const eligibilityResult = this.eligibilityService.calculateEligibility(this.projectInfo);
    this.isEligible = eligibilityResult.isEligible;
    this.effyAidAmount = eligibilityResult.effyAidAmount;
  }

  goToPersonalInfo(): void {
    this.router.navigate(['/personal/info']);
  }

  goToProjectInfo(): void {
    this.router.navigate(['/project/info']);
  }
}