import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { SnapshotDetailsComponent } from './BeReports/snapshot-details.component'
import { VolumessDetailsComponent } from './VolumeReports/volumess-details.component'
import { SnapshotCreationComponent } from './CreateSnapShot/snapshot-creation.component';
import { UploadReportsComponent } from './upload-reports/upload-reports.component';
import { ViewReportsComponent } from './view-reports/view-reports.component'


@NgModule({
  declarations: [AppComponent, SnapshotDetailsComponent, VolumessDetailsComponent , SnapshotCreationComponent, UploadReportsComponent, ViewReportsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
       {
          path : "",
          redirectTo : "/beReports",
          pathMatch : "full"
      },
      {
          path : "volumeReports",
          component : VolumessDetailsComponent
      },
      { 
        path : "beReports",
        component : SnapshotDetailsComponent
      }
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
