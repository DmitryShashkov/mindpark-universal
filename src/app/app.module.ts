import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./layouts/header/header.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        RouterModule.forRoot([
            { path: '', component: HomeComponent, pathMatch: 'full' },
            // { path: '', loadChildren: './content/content.module#ContentModule' },
            // { path: 'about', component: AboutComponent },
            // { path: 'why-choose', component: WhyChooseComponent },
            // { path: 'blog', component: BlogComponent }
        ]),
        // TransferHttpCacheModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
