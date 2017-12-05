import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import 'rxjs/add/operator/take';
import { Router } from '@angular/router';
import { SnapShot } from '../CreateSnapShot/snapshot'
import { FinanceReportsService } from '../finance-reports.service';

import { FileUploadComponent } from '../file-upload/file-upload.component'



@Component({
  selector: 'upload-reports',
  templateUrl: './upload-reports.component.html',
  styleUrls: ['./upload-reports.component.css']
})

export class UploadReportsComponent implements OnInit {
  snapshots : SnapShot[];
  selectedSnapshot : number;
  bsModalRef : BsModalRef;
  constructor(private router : Router , private modelService : BsModalService, private financeReportsService : FinanceReportsService) { }

  ngOnInit() {
    this.financeReportsService.getSnapShotDetails().then(snapshotDetails => this.snapshots = snapshotDetails);
  }
  
  SelectSnapShot(snapshot : SnapShot) : void {
    this.selectedSnapshot = snapshot.id;
  }
  getSnapShotDetails() : void{
   let snapshot = this.snapshots.map((snapshot) => snapshot.id === this.selectedSnapshot);
   console.log(snapshot);
  }
  uploadBEReports() : void {
    this.financeReportsService.getTransactionDetails(this.selectedSnapshot).then(uploadedReports => {
      this.bsModalRef  = this.modelService.show(FileUploadComponent ,{class: 'modal-md', ignoreBackdropClick: true ,keyboard:false});
      this.bsModalRef.content.title = 'Upload Reports';
      console.log(uploadedReports);
      this.bsModalRef.content.uploadedList = uploadedReports;
    });
    
   // this.bsModalRef.content.saved.take(1).subscribe(this.uploadNewReport.bind(this));
    //this.router.navigate(['/upload' , this.selectedSnapshot]);
  }
  uploadNewReport(reportData : any) : void {
    alert("data uploaded");
  }
}
