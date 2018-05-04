import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'que-pro',
    templateUrl: './que-pro.component.html'
})
export class QueProComponent {
    public readonly deployURL: string = environment.deployURL;
}
