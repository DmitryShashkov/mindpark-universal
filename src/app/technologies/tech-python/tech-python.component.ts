import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-python',
    templateUrl: './tech-python.component.html'
})
export class TechPythonComponent {
    public readonly deployURL: string = environment.deployURL;
}
