import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule ,ReactiveFormsModule  } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { SnapshotDetailsComponent } from './BeReports/snapshot-details.component'
import { VolumessDetailsComponent } from './VolumeReports/volumess-details.component'
import { SnapshotCreationComponent } from './CreateSnapShot/snapshot-creation.component';
import { UploadReportsComponent } from './upload-reports/upload-reports.component';
import { ViewReportsComponent } from './view-reports/view-reports.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FinanceReportsService } from './finance-reports.service'


@NgModule({
  declarations: [AppComponent, SnapshotDetailsComponent, VolumessDetailsComponent , SnapshotCreationComponent, UploadReportsComponent, ViewReportsComponent, FileUploadComponent],
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
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  entryComponents : [FileUploadComponent],
  providers: [FinanceReportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
