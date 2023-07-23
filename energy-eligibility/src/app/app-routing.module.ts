import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalInfoComponent } from './modules/personal-info/personal-info.component';
import { ProjectInfoComponent } from './modules/project-info/project-info.component';
import { SummaryComponent } from './modules/summary/summary.component';

const routes: Routes = [
  { path: 'personal/info', component: PersonalInfoComponent, data: { breadcrumb: 'Informations personnelles' } },
  { path: 'project/info', component: ProjectInfoComponent, data: { breadcrumb: 'Informations projets' } },
  { path: 'summary', component: SummaryComponent, data: { breadcrumb: 'Récapitulatif' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
