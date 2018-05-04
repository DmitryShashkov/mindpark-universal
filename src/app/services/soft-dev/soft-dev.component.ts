import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'soft-dev',
    templateUrl: './soft-dev.component.html'
})
export class SoftDevComponent {
    public readonly deployURL: string = environment.deployURL;
}
