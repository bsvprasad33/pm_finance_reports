import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule ,ReactiveFormsModule  } from "@angular/forms";
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BeReportsModule } from './BeReports/be-reports.module';
import { SnapshotDetailsComponent } from './BeReports/snapshot-details.component'
import { VolumessDetailsComponent } from './VolumeReports/volumess-details.component'
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FinanceReportsService } from './finance-reports.service';



@NgModule({
  declarations: [AppComponent, VolumessDetailsComponent, FileUploadComponent],
  imports: [
    BrowserModule,
    BeReportsModule,
    HttpModule,
    RouterModule.forRoot([
      {
          path : "volumeReports",
          component : VolumessDetailsComponent
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
