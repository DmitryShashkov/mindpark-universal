import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-ios',
    templateUrl: './tech-ios.component.html'
})
export class TechIosComponent {
    public readonly deployURL: string = environment.deployURL;
}
