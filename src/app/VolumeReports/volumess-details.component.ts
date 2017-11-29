import { Component , OnInit } from "@angular/core"


@Component( {
    selector : 'volume-snapshot',
    templateUrl : './volumess-details.component.html'
})

export class VolumessDetailsComponent implements OnInit{
    title = "Volume Dashboard";
    ngOnInit() {
        console.log("volumes");
    }
}