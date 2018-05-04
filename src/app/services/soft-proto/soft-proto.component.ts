import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'soft-proto',
    templateUrl: './soft-proto.component.html'
})
export class SoftProtoComponent {
    public readonly deployURL: string = environment.deployURL;
}
