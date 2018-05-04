import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TechRubyComponent} from "./tech-ruby/tech-ruby.component";
import {TechJavaComponent} from "./tech-java/tech-java.component";
import {TechScalaComponent} from "./tech-scala/tech-scala.component";
import {TechCComponent} from "./tech-c/tech-c.component";
import {TechHtmlCssComponent} from "./tech-html-css/tech-html-css.component";
import {TechPythonComponent} from "./tech-python/tech-python.component";
import {TechPhpComponent} from "./tech-php/tech-php.component";
import {TechAndroidComponent} from "./tech-android/tech-android.component";
import {TechOsxComponent} from "./tech-osx/tech-osx.component";
import {TechIosComponent} from "./tech-ios/tech-ios.component";
import {TechJavascriptComponent} from "./tech-javascript/tech-javascript.component";
import {TechWindowsComponent} from "./tech-windows/tech-windows.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'ruby',
                component: TechRubyComponent
            },
            {
                path: 'java',
                component: TechJavaComponent
            },
            {
                path: 'scala',
                component: TechScalaComponent
            },
            {
                path: 'c',
                component: TechCComponent
            },
            {
                path: 'htmlcss',
                component: TechHtmlCssComponent
            },
            {
                path: 'python',
                component: TechPythonComponent
            },
            {
                path: 'php',
                component: TechPhpComponent
            },
            {
                path: 'android',
                component: TechAndroidComponent
            },
            {
                path: 'osx',
                component: TechOsxComponent
            },
            {
                path: 'ios',
                component: TechIosComponent
            },
            {
                path: 'javascript',
                component: TechJavascriptComponent
            },
            {
                path: 'windows',
                component: TechWindowsComponent
            }
        ])
    ],
    declarations: [
        TechRubyComponent,
        TechJavaComponent,
        TechScalaComponent,
        TechCComponent,
        TechHtmlCssComponent,
        TechPythonComponent,
        TechPhpComponent,
        TechAndroidComponent,
        TechOsxComponent,
        TechIosComponent,
        TechJavascriptComponent,
        TechWindowsComponent
    ]
})
export class TechnologiesModule {}
