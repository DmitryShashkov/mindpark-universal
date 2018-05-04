import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-scala',
    templateUrl: './tech-scala.component.html'
})
export class TechScalaComponent {
    public readonly deployURL: string = environment.deployURL;
}
