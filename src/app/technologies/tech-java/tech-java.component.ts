import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-java',
    templateUrl: './tech-java.component.html'
})
export class TechJavaComponent {
    public readonly deployURL: string = environment.deployURL;
}
