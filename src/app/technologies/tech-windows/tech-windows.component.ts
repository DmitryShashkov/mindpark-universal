import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'tech-windows',
    templateUrl: './tech-windows.component.html'
})
export class TechWindowsComponent {
    public readonly deployURL: string = environment.deployURL;
}
