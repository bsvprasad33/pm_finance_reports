import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTableDataSource,MatPaginator} from '@angular/material';
import { SnapShot } from '../models/snapshot';
import { FinanceReportsService } from '../finance-reports.service';

@Component({
  selector: 'view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  snapshots : SnapShot[];
  selectedSnapshot : number;
  displayedColumns = ["SnapShot Name" , "RTBR" , "FinPulse" , "Process" , "View Dashboard"];
  dataSource ;
  constructor(private financeReportsService : FinanceReportsService , private router : Router) { }

   ngOnInit() {
        console.log("view reports");
         this.financeReportsService.getSnapShotDetails().then(snapshotDetails => {
           this.dataSource = new MatTableDataSource(snapshotDetails);
        });
    }
    SelectSnapShot(snapshot : SnapShot) : void {
      this.selectedSnapshot = snapshot.id;
    }
    viewDetailsreport(snapshot) : void {
      this.selectedSnapshot = snapshot.id;
      this.router.navigate(['/beReports/reports' , this.selectedSnapshot]);
    }

}
