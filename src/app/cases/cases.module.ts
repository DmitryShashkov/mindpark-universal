import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {CasesComponent} from "./cases.component";
import {AllSquareComponent} from "./all-square/all-square.component";
import {ErnstAndYoungComponent} from "./ernst-and-young/ernst-and-young.component";
import {QueProComponent} from "./que-pro/que-pro.component";
import {ShopBeamComponent} from "./shop-beam/shop-beam.component";
import {SkimDocComponent} from "./skim-doc/skim-doc.component";
import {SpotNewsComponent} from "./spot-news/spot-news.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CasesComponent
            },
            {
                path: 'allsquare',
                component: AllSquareComponent
            },
            {
                path: 'ernstandyoung',
                component: ErnstAndYoungComponent
            },
            {
                path: 'quepro',
                component: QueProComponent
            },
            {
                path: 'shopbeam',
                component: ShopBeamComponent
            },
            {
                path: 'skimdoc',
                component: SkimDocComponent
            },
            {
                path: 'spotnews',
                component: SpotNewsComponent
            }
        ])
    ],
    declarations: [
        CasesComponent,
        AllSquareComponent,
        ErnstAndYoungComponent,
        QueProComponent,
        ShopBeamComponent,
        SkimDocComponent,
        SpotNewsComponent
    ]
})
export class CasesModule {}
