import {Component} from "@angular/core";
import {environment} from "../../environments/environment";

@Component({
    selector: 'w-recie-in-t-enh-inets',
    templateUrl: './w-recie-in-t-enh-inets.component.html',
    styleUrls: ['./w-recie-in-t-enh-inets.component.css']
})
export class WRecieInTEnhInetsComponent {
    public readonly deployURL = environment.deployURL;
}
