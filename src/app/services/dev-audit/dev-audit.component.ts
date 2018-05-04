import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'dev-audit',
    templateUrl: './dev-audit.component.html'
})
export class DevAuditComponent {
    public readonly deployURL: string = environment.deployURL;
}
