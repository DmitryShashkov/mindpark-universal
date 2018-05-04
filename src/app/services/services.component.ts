import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'services',
    templateUrl: './services.component.html'
})
export class ServicesComponent {
    public readonly deployURL: string = environment.deployURL;
}
