import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './../components/home.component/home.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './../components/header.component/header.component';
import { MainNavigationComponent} from './../components/main-navigation.component/main-navigation.component';
import { DataService } from './../services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
