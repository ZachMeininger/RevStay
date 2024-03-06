import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HotelPageComponent } from './components/hotel-page/hotel-page.component';
import { ViewProductComponent } from './components/view-product/view-product.component';


export const routes: Routes = [
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path: 'hotelrooms/:id', component:HotelPageComponent},
    {path: 'home', component:HomeComponent},
    {path: 'hotel', component:ViewProductComponent},
    {path: '', redirectTo: 'component:AppComponent', pathMatch: 'full'}
    
];
