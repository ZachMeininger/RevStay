import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HotelPageComponent } from './components/hotel-page/hotel-page.component';

export const routes: Routes = [
    {path:'register', component:RegisterComponent},
    {path:'login', component:LoginComponent},
    {path: 'hotel/:id', component:HotelPageComponent},
    {path: 'home', component:HomeComponent},
    {path: '', redirectTo: 'component:AppComponent', pathMatch: 'full'}
    
];
