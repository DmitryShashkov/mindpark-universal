import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public readonly deployURL: string = environment.deployURL;
}
