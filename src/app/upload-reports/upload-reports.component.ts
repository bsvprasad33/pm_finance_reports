import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import 'rxjs/add/operator/take';
import { Router } from '@angular/router';

import { FileUploadComponent } from '../file-upload/file-upload.component'


const snapshots = [{
    id : 1,
    name : "SS1",
    description : "SS Description"
},{
    id : 2,
    name : "SS2",
    description : "SS Description"
},{
    id : 3,
    name : "SS3",
    description : "SS Description"
},{
    id : 4,
    name : "SS4",
    description : "SS Description"
},{
    id : 5,
    name : "SS5",
    description : "SS Description"
}]

class SnapShot {
  id : number;
  name : string;
  description : string;
}

@Component({
  selector: 'upload-reports',
  templateUrl: './upload-reports.component.html',
  styleUrls: ['./upload-reports.component.css']
})

export class UploadReportsComponent implements OnInit {
  snapshots : SnapShot[] = snapshots;
  selectedSnapshot : number;
  bsModalRef : BsModalRef;
  constructor(private router : Router , private modelService : BsModalService) { }

  ngOnInit() {
    console.log("upload reports");
  }
  
  SelectSnapShot(snapshot : SnapShot) : void {
    this.selectedSnapshot = snapshot.id;
  }
  getSnapShotDetails() : void{
   let snapshot = this.snapshots.map((snapshot) => snapshot.id === this.selectedSnapshot);
   console.log(snapshot);
  }
  uploadBEReports() : void {
    this.bsModalRef  = this.modelService.show(FileUploadComponent);
    this.bsModalRef.content.title = 'Upload Reports';
   // this.bsModalRef.content.saved.take(1).subscribe(this.uploadNewReport.bind(this));
    //this.router.navigate(['/upload' , this.selectedSnapshot]);
  }
  uploadNewReport(reportData : any) : void {
    alert("data uploaded");
  }
}
