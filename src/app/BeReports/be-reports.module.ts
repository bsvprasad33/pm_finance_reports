import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


import { SnapshotDetailsComponent } from './snapshot-details.component'
import { SnapshotCreationComponent } from '../CreateSnapShot/snapshot-creation.component';
import { UploadReportsComponent } from '../upload-reports/upload-reports.component';
import { ViewReportsComponent } from '../view-reports/view-reports.component';
import { ViewDetailReportsComponent } from '../view-detail-reports/view-detail-reports.component';
import { ViewYearlyReportsComponent } from '../view-yearly-reports/view-yearly-reports.component';
import { ViewMonthlyReportsComponent } from '../view-monthly-reports/view-monthly-reports.component';


@NgModule({
    declarations : [SnapshotDetailsComponent , SnapshotCreationComponent , UploadReportsComponent , ViewReportsComponent ,ViewDetailReportsComponent,ViewYearlyReportsComponent,ViewMonthlyReportsComponent],
    imports : [MatTableModule,MatPaginatorModule,BrowserModule , BrowserAnimationsModule,FormsModule,
                RouterModule.forChild([
                    {
                        path : "",
                        redirectTo : "beReports",
                        pathMatch : "full"
                    },
                     { 
                        path : "beReports",
                        component : SnapshotDetailsComponent,
                        children : [
                            {
                                path : "",
                                redirectTo : "createsnapshot",
                                pathMatch : "full" 
                            },
                           {
                                path : "createsnapshot",
                                component: SnapshotCreationComponent
                            },
                            {
                                path : "uploadreports",
                                component: UploadReportsComponent
                            },
                            {
                                path : "viewreports",
                                component: ViewReportsComponent
                            },
                            {
                                path : "reports/:snapshotId",
                                component : ViewDetailReportsComponent
                            }
                        ]
                    }
                                        
                ])
                ],
    exports : [RouterModule]
    
})

export class BeReportsModule {

}