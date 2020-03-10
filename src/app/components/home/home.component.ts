import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 loading:boolean;
 spotify:any [] = [];
 artist:any = {};

  constructor(private _servicio:SpotifyService, private _ruta:Router) { 

    this.loading=true;
    this._servicio.fspotify().subscribe((data:any) => {
      //console.log(data);

      this.spotify= data;
      this.loading=false;
    });

    
  }

  verArtist(item:any){

    // this._servicio.getArtist(item).subscribe((data:any)=>{

    //   console.log(data);
    //   this.artist=data;
    // })
    // //console.log(this.artist);
   return this._ruta.navigate(['artist',item])

  }
  

  ngOnInit() {
  }

}
