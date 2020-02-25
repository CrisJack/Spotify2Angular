import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../servicio/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist:any = {}

  constructor(private _ac:ActivatedRoute, private _servicio:SpotifyService) {

    this._ac.params.subscribe(params =>{

     // console.log(params.item);

      this._servicio.getArtist(params.item).subscribe((data:any)=>{

        //console.log(data);
        this.artist=data;
      })
    })  
    
    

      
   
   }

  ngOnInit() {
  }

}
