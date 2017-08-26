import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { MainNavigationComponent} from './main-navigation/main-navigation.component';

@NgModule({
    imports: [
        BrowserModule,

    ],
    declarations: [
        HeaderComponent,
        MainNavigationComponent
    ],
    providers: [/* TODO: Providers go here */],
})
export class SharedModule { }
