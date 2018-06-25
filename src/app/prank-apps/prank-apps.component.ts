import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'prank-apps',
    templateUrl: './prank-apps.component.html',
    styleUrls: ['./prank-apps.component.css']
})
export class PrankAppsComponent {
    public readonly deployURL: string = environment.deployURL;
}
