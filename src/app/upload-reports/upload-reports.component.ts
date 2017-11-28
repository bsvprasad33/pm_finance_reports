import { Component, OnInit } from '@angular/core';


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
  constructor() { }

  ngOnInit() {
  }
  SelectSnapShot(snapshot : SnapShot) : void {
    this.selectedSnapshot = snapshot.id;
  }
  getSnapShotDetails() : void{
   let snapshot = this.snapshots.map((snapshot) => snapshot.id === this.selectedSnapshot);
   console.log(snapshot);
  }
}
