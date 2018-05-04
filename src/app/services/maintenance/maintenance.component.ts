import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'maintenance',
    templateUrl: './maintenance.component.html'
})
export class MaintenanceComponent {
    public readonly deployURL: string = environment.deployURL;
}
