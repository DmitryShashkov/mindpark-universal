import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./layouts/header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactsComponent} from "./contacts/contacts.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutUsComponent,
        ContactsComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'services', loadChildren: './services/services.module#ServicesModule' },
            { path: 'technologies', loadChildren: './technologies/technologies.module#TechnologiesModule' },
            { path: 'cases', loadChildren: './cases/cases.module#CasesModule' },
            { path: 'contacts', component: ContactsComponent }
        ]),
        // TransferHttpCacheModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
