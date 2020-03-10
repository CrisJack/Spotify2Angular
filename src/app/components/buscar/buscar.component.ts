import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  loading:boolean;
  buscar:any [] = [];

  constructor(private _servicio:SpotifyService, private _ruta:Router)  {
    
  }

  ngOnInit() {
  }

  

  buscarArtista(palabra:string){

    this.loading=true;

    this._servicio.buscarSpotify(palabra).subscribe((data:any) => {
      //console.log(data);

      this.buscar = data;
      //console.log(this.buscar);
      this.loading=false;
    });
  }

  verArtist(item:any){
    //console.log(item);
    this._ruta.navigate(['artist',item])

    
  }



}
