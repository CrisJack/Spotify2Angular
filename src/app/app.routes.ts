//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
    import { from } from 'rxjs';
const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '' ,redirectTo:'home', pathMatch:'full'},
    { path:'buscar',component:BuscarComponent},    
    { path: '**', component: PagenotfoundComponent },
];


export const app_routing = RouterModule.forRoot(routes);
