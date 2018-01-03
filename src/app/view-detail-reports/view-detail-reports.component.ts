import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

import { YEARLY_DATA } from '../mock-data/yearly-reports-data';
import  { QUATERLY_DATA } from '../mock-data/yearly-reports-data';
import { YearlyReports } from "../models/yearly-reports-model";
import { MonthlyReports } from "../models/quaterly-reports-model";


@Component({
  selector: 'app-view-detail-reports',
  templateUrl: './view-detail-reports.component.html',
  styleUrls: ['./view-detail-reports.component.css']
})
export class ViewDetailReportsComponent implements OnInit {
  yearlyReports :  YearlyReports[] = YEARLY_DATA;
  monthlyReports : MonthlyReports[] = QUATERLY_DATA;
  //displayedCoulumns = ["PortFolio" , "Q1" , "Q2" , "Q3" , "Q4"];
 // dataSource = new MatTableDataSource(YEARLY_DATA);

  constructor(private route : ActivatedRoute , private location : Location) { }

  ngOnInit() : void {
    this.route.params.subscribe((params: Params) => {
      //  let userId = params['userId'];
        console.log(params);
    });
  }
   goBack() : void {
       this.location.back();
   }
}
