import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'skim-doc',
    templateUrl: './skim-doc.component.html'
})
export class SkimDocComponent {
    public readonly deployURL: string = environment.deployURL;
}
