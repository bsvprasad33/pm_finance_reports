import { Component } from "@angular/core"

@Component({
    selector : "snapshot-creation",
    templateUrl : './snapshot-creation.component.html'
})

export class SnapshotCreationComponent{
    snapshotName: String;
    snapshotDesc: String;
    saveSnapshotDetails() : void {
        console.log("data saved");
    }
}