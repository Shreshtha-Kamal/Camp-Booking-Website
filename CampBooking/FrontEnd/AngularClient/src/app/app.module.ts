import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/api.service';
import { CamppageComponent } from './camppage/camppage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookingScreenComponent } from './booking-screen/booking-screen.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';
import { ConfirmationscreenComponent } from './confirmationscreen/confirmationscreen.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstpageComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    CamppageComponent,
    BookingScreenComponent,
    ManagebookingComponent,
    ConfirmationscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
