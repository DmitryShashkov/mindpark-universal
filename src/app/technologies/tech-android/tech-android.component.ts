import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-android',
    templateUrl: './tech-android.component.html'
})
export class TechAndroidComponent {
    public readonly deployURL: string = environment.deployURL;
}
