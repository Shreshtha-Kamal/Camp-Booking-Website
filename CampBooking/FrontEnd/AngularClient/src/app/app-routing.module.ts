import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AuthGuard } from './auth.guard';
import { BookingScreenComponent } from './booking-screen/booking-screen.component';
import { CamppageComponent } from './camppage/camppage.component';
import { ConfirmationscreenComponent } from './confirmationscreen/confirmationscreen.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ManagebookingComponent } from './managebooking/managebooking.component';


const routes: Routes = [
  {path: '',component:FirstpageComponent},
  {path: 'adminlogin',component:AdminloginComponent},
  {path: 'admindashboard',component:AdminDashboardComponent, canActivate:[AuthGuard]},
  {path: 'camppage',component:CamppageComponent, canActivate:[AuthGuard]},
  {path: 'firstpage',component:FirstpageComponent},
  {path: 'bookingscreen/:id',component:BookingScreenComponent},
  {path: 'managebooking',component:ManagebookingComponent},
  {path: 'confirmationscreen',component:ConfirmationscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
