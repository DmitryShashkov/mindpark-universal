import {ServicesComponent} from "./services.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {SoftProtoComponent} from "./soft-proto/soft-proto.component";
import {DedicatedDevComponent} from "./dedicated-dev/dedicated-dev.component";
import {SoftDevComponent} from "./soft-dev/soft-dev.component";
import {SoftQaComponent} from "./soft-qa/soft-qa.component";
import {DevAuditComponent} from "./dev-audit/dev-audit.component";
import {MaintenanceComponent} from "./maintenance/maintenance.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ServicesComponent
            },
            {
                path: 'softproto',
                component: SoftProtoComponent
            },
            {
                path: 'dedicateddev',
                component: DedicatedDevComponent
            },
            {
                path: 'softdev',
                component: SoftDevComponent
            },
            {
                path: 'softqa',
                component: SoftQaComponent
            },
            {
                path: 'devaudit',
                component: DevAuditComponent
            },
            {
                path: 'maintenance',
                component: MaintenanceComponent
            }
        ])
    ],
    declarations: [
        ServicesComponent,
        SoftProtoComponent,
        DedicatedDevComponent,
        SoftDevComponent,
        SoftQaComponent,
        DevAuditComponent,
        MaintenanceComponent
    ]
})
export class ServicesModule {}
