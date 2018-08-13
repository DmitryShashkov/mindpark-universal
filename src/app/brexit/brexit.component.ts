import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'brexit',
    templateUrl: './brexit.component.html',
    styleUrls: ['./brexit.component.css']
})
export class BrexitComponent {
    public readonly deployURL: string = environment.deployURL;
}
