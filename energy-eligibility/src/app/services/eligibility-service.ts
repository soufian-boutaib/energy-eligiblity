import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { OwnershipEnum, ProjectInfo } from '../models/project-info-model';

@Injectable({
  providedIn: 'root'
})
export class EligibilityService {

  constructor() { }

  calculateEligibility(projectInfo: ProjectInfo): { isEligible: boolean, effyAidAmount: number } {
    const result: { isEligible: boolean, effyAidAmount: number } = {
      isEligible: false,
      effyAidAmount: 0
    };

    if (projectInfo.ownership === OwnershipEnum.Owner) {
      const costOfProjectMultiplier = environment.appConfig.costOfProjectMultiplier;
      const effyAidMultiplier = environment.appConfig.effyAidMultiplier;
      const effyAidDivider = environment.appConfig.effyAidDivider;

      const costOfProject = projectInfo.area * costOfProjectMultiplier;
      const householdSize = projectInfo.numberOfPeople;
      result.effyAidAmount = (costOfProject * effyAidMultiplier) - (projectInfo.householdIncome / householdSize) * effyAidDivider;

      if (result.effyAidAmount > 0) {
        result.isEligible = true;
      }
    }

    return result;
  }
}