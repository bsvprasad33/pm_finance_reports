import { Component, OnInit , AfterViewInit , ViewChild} from "@angular/core";

@Component ({
    selector : 'be-reports',
    templateUrl : './snapshot-details.component.html'
})

export class SnapshotDetailsComponent implements OnInit , AfterViewInit {
    title = "BE Dashboard";
public viewName :string='';
    ngOnInit() { }
    ngAfterViewInit () {  }
}