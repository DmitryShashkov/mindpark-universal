import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'all-square',
    templateUrl: './all-square.component.html'
})
export class AllSquareComponent {
    public readonly deployURL: string = environment.deployURL;
}
