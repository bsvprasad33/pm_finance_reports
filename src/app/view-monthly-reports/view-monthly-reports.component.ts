import { Component, OnInit, Input , ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator} from '@angular/material';

import { MonthlyReports } from "../models/quaterly-reports-model";

@Component({
  selector: 'app-view-monthly-reports',
  templateUrl: './view-monthly-reports.component.html',
  styleUrls: ['./view-monthly-reports.component.css']
})
export class ViewMonthlyReportsComponent implements OnInit {
  @Input() monthlyReports : MonthlyReports[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ["PortFolio" , "M1" , "M2" , "M3" , "RTIn" , "RTOut" , "Total"];
  dataSource;
  constructor() { }

  ngOnInit() {
     this.dataSource = new MatTableDataSource(this.monthlyReports);
  }
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
