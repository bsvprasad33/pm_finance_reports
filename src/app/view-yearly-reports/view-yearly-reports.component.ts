import { Component, OnInit, Input , ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator} from '@angular/material';

import { YearlyReports } from "../models/yearly-reports-model";


@Component({
  selector: 'app-view-yearly-reports',
  templateUrl: './view-yearly-reports.component.html',
  styleUrls: ['./view-yearly-reports.component.css']
})
export class ViewYearlyReportsComponent implements OnInit {
  @Input() yearlyReports : YearlyReports[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["PortFolio" , "Q1" , "Q2" , "Q3" , "Q4"];
  dataSource;
  constructor() { 
    
  }

  ngOnInit() { 
    this.dataSource = new MatTableDataSource(this.yearlyReports);
    console.log(this.dataSource);
  }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
