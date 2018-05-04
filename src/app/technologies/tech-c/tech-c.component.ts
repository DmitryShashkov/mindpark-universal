import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-c',
    templateUrl: './tech-c.component.html'
})
export class TechCComponent {
    public readonly deployURL: string = environment.deployURL;
}
