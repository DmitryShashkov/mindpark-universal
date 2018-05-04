import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'dedicated-dev',
    templateUrl: './dedicated-dev.component.html'
})
export class DedicatedDevComponent {
    public readonly deployURL: string = environment.deployURL;
}
