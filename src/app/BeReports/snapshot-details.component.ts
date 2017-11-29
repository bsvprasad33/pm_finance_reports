import { Component, OnInit , AfterViewInit , ViewChild} from "@angular/core";
import { SnapshotCreationComponent } from '../CreateSnapShot/snapshot-creation.component';
import { UploadReportsComponent } from '../upload-reports/upload-reports.component';
import { ViewReportsComponent } from '../view-reports/view-reports.component'


@Component ({
    selector : 'be-reports',
    templateUrl : './snapshot-details.component.html'
})

export class SnapshotDetailsComponent implements OnInit , AfterViewInit {
    title = "BE Dashboard";
    @ViewChild(SnapshotCreationComponent) snapshotcreation : SnapshotCreationComponent;
    @ViewChild(UploadReportsComponent) uploadreports : UploadReportsComponent;
    @ViewChild(ViewReportsComponent) viewreports : ViewReportsComponent;

public viewName :string='';
    ngOnInit() {
        console.log("be reports");
        this.viewName="create";
    }
    ngAfterViewInit () {
        console.log(this.snapshotcreation);   
    }
    changeView(name) {
        console.log(name);
        this.viewName = name;
    }

}