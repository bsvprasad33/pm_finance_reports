import { Component, OnInit } from '@angular/core';
import { SnapShot } from '../CreateSnapShot/snapshot';
import { FinanceReportsService } from '../finance-reports.service';

@Component({
  selector: 'view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  snapshots : SnapShot[];
  
  constructor(private financeReportsService : FinanceReportsService) { }

   ngOnInit() {
        console.log("view reports");
         this.financeReportsService.getSnapShotDetails().then(snapshotDetails => this.snapshots = snapshotDetails);
    }

}
