import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NglModule } from 'ng-lightning';
import { ChildComponent } from './child/child.component';
import { FamilyComponent } from './family/family.component';
import { CaregiverComponent } from './caregiver/caregiver.component';
import { FamilySummaryComponent } from './family-summary/family-summary.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FamilyComponent,
    CaregiverComponent,
    FamilySummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NglModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
