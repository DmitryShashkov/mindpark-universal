import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'spot-news',
    templateUrl: './spot-news.component.html'
})
export class SpotNewsComponent {
    public readonly deployURL: string = environment.deployURL;
}
