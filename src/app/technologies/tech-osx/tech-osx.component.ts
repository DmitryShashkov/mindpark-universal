import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-osx',
    templateUrl: './tech-osx.component.html'
})
export class TechOsxComponent {
    public readonly deployURL: string = environment.deployURL;
}
