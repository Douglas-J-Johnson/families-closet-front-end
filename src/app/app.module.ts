import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NglModule } from 'ng-lightning';
import { ChildComponent } from './child/child.component';
import { FamiliyComponent } from './familiy/familiy.component';
import { CaregiverComponent } from './caregiver/caregiver.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    FamiliyComponent,
    CaregiverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NglModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
