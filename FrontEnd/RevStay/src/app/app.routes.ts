import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HotelPageComponent } from './components/hotel-page/hotel-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { AddhotelComponent } from './components/addhotel/addhotel.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ManageReservationsComponent } from './components/manage-reservations/manage-reservations.component';
import { PasswordchangeComponent } from './components/passwordchange/passwordchange.component';


export const routes: Routes = [
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path: 'hotelrooms/:id', component:HotelPageComponent},
    {path: 'home', component:HomeComponent},
    {path: 'hotel', component:ViewProductComponent},
    {path: 'addHotel', component:AddhotelComponent},
    {path: 'checkout', component:CheckoutComponent},
    {path: 'manageReservations', component:ManageReservationsComponent},
    {path: 'passchange', component:PasswordchangeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
    
];
