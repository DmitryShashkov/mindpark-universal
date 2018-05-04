import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'soft-qa',
    templateUrl: './soft-qa.component.html'
})
export class SoftQaComponent {
    public readonly deployURL: string = environment.deployURL;
}
