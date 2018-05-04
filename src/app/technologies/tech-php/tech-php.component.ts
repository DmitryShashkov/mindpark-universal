import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-php',
    templateUrl: './tech-php.component.html'
})
export class TechPhpComponent {
    public readonly deployURL: string = environment.deployURL;
}
