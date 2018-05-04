import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-html-css',
    templateUrl: './tech-html-css.component.html'
})
export class TechHtmlCssComponent {
    public readonly deployURL: string = environment.deployURL;
}
