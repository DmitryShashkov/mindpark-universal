import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'ernst-and-young',
    templateUrl: './ernst-and-young.component.html'
})
export class ErnstAndYoungComponent {
    public readonly deployURL: string = environment.deployURL;
}
