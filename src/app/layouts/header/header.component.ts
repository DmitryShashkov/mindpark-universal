import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'ng-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    public readonly deployURL: string = environment.deployURL;
}
