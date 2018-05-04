import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'about-us',
    templateUrl: './about-us.component.html'
})
export class AboutUsComponent {
    public readonly deployURL: string = environment.deployURL;
}
