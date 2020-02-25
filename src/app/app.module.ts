import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { app_routing } from './app.routes';

//servicios


//HttpClientModule
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { from } from 'rxjs';
import { NoimagenPipe } from './pipes/noimagen.pipe';

import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BuscarComponent,
    PagenotfoundComponent,
    NoimagenPipe,    
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
