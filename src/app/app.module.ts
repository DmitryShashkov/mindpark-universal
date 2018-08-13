import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./layouts/header/header.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {BlogComponent} from "./blog/blog.component";
import {PrankAppsComponent} from "./prank-apps/prank-apps.component";
import {BrexitComponent} from "./brexit/brexit.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutUsComponent,
        ContactsComponent,
        BlogComponent,
        PrankAppsComponent,
        BrexitComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'about-us', component: AboutUsComponent },
            { path: 'services', loadChildren: './services/services.module#ServicesModule' },
            { path: 'technologies', loadChildren: './technologies/technologies.module#TechnologiesModule' },
            { path: 'cases', loadChildren: './cases/cases.module#CasesModule' },
            { path: 'contacts', component: ContactsComponent },
            { path: 'blog', component: BlogComponent },
            { path: 'prank-apps', component: PrankAppsComponent },
            { path: 'brexit', component: BrexitComponent }
        ]),
        // TransferHttpCacheModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
