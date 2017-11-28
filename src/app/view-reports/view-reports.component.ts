import { Component, OnInit } from '@angular/core';


const snapshots = [{
    id : 1,
    name : "SS1",
    description : "SS Description",
    RTBR : true,
    Finpulse : false,
    OMS : false
},{
    id : 2,
    name : "SS2",
    description : "SS Description",
    RTBR : true,
    Finpulse : true,
    OMS : true
},{
    id : 3,
    name : "SS3",
    description : "SS Description",
    RTBR : true,
    Finpulse : false,
    OMS : true
},{
    id : 4,
    name : "SS4",
    description : "SS Description",
    RTBR : true,
    Finpulse : false,
    OMS : true
},{
    id : 5,
    name : "SS5",
    description : "SS Description",
    RTBR : true,
    Finpulse : true,
    OMS : true
}]

class SnapShot {
  id : number;
  name : string;
  description : string;
  RTBR: boolean;
  Finpulse : boolean;
  OMS : boolean;
}


@Component({
  selector: 'view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  snapshots : SnapShot[] = snapshots;

  constructor() { }

  ngOnInit() {
  }

}
