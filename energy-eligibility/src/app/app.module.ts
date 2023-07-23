import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './modules/personal-info/personal-info.component';
import { ProjectInfoComponent } from './modules/project-info/project-info.component';
import { SummaryComponent } from './modules/summary/summary.component';
import { ManageFormService } from './services/manage-form-service';
import { EligibilityService } from './services/eligibility-service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    ProjectInfoComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [    
    ManageFormService,
    EligibilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
