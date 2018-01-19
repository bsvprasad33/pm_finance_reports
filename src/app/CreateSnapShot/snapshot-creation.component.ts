import { Component , OnInit } from "@angular/core";

import { FinanceReportsService } from '../finance-reports.service';

@Component({
    selector : "snapshot-creation",
    templateUrl : './snapshot-creation.component.html'
})

export class SnapshotCreationComponent implements OnInit{
    snapshotName: String;
    snapshotDesc: String;
    constructor(private financeReportsService : FinanceReportsService ) {

    }
    saveSnapshotDetails() : void {
        let snapShotModel ={};
        snapShotModel["snapshotName"] = this.snapshotName;
        snapShotModel["snapshotDescription"] = this.snapshotDesc;
        snapShotModel["creationDate"] = new Date();
        this.financeReportsService.saveSnapshotDetails(snapShotModel)
        .then(result => {
            this.snapshotDesc = "";
            this.snapshotName = "";
            alert("Snapshot is creates successfully");
            } 
            
        )
        .catch(error => console.log(error));;
        
    }
    ngOnInit() {
        console.log("create snapshot");
    }
}