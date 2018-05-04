import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-ruby',
    templateUrl: './tech-ruby.component.html'
})
export class TechRubyComponent {
    public readonly deployURL: string = environment.deployURL;
}
