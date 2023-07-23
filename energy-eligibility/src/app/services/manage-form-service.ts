import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import defaultPersonalInfo, { PersonalInfo } from '../models/personal-info-model';
import defaultProjectInfo, { ProjectInfo } from '../models/project-info-model';

@Injectable({
  providedIn: 'root'
})
export class ManageFormService {
  private personalInfoSource = new BehaviorSubject<PersonalInfo>(defaultPersonalInfo);
  private projectInfoSource = new BehaviorSubject<ProjectInfo>(defaultProjectInfo);

  currentPersonalInfoForm = this.personalInfoSource.asObservable();
  currentProjectInfoForm = this.projectInfoSource.asObservable();

  constructor() { }

  changePersonalInfoForm(form: PersonalInfo) {
    this.personalInfoSource.next(form);
  }

  changeProjectInfoForm(form: ProjectInfo) {
    this.projectInfoSource.next(form);
  }
}