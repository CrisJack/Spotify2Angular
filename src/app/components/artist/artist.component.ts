import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../servicio/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  loading:boolean;
  artist:any = {};
  tracks:any[] = [];

  constructor(private _ac:ActivatedRoute, private _servicio:SpotifyService) {

    this.loading=true;

    this._ac.params.subscribe(params =>{

     // console.log(params.item);

      this._servicio.getArtist(params.item).subscribe((data:any)=>{

        //console.log(data);
        this.artist=data;

        this.loading=false;
      })

      this._servicio.getTrack(params.item).subscribe((data:any)=>{
        //console.log(data.tracks);

        this.tracks=data.tracks;
        this.loading=false;

        //console.log(this.tracks);
      })

    })  
    
    

      
   
   }

  ngOnInit() {
  }

}
