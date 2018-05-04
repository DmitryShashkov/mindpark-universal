import {Component} from "@angular/core";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'shop-beam',
    templateUrl: './shop-beam.component.html'
})
export class ShopBeamComponent {
    public readonly deployURL: string = environment.deployURL;
}
