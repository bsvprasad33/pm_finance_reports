import { Component , OnInit } from "@angular/core"

@Component({
    selector : "snapshot-creation",
    templateUrl : './snapshot-creation.component.html'
})

export class SnapshotCreationComponent implements OnInit{
    snapshotName: String;
    snapshotDesc: String;
    saveSnapshotDetails() : void {
        console.log("data saved");
    }
    ngOnInit() {
        console.log("create snapshot");
    }
}