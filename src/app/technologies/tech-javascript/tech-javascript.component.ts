import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-javascript',
    templateUrl: './tech-javascript.component.html'
})
export class TechJavascriptComponent {
    public readonly deployURL: string = environment.deployURL;
}
