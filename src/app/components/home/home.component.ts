import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../servicio/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 spotify:any [] = [];

  constructor(private _servicio:SpotifyService) { 
    this._servicio.fspotify().subscribe((data:any) => {
      // console.log(data.albums.items);

      this.spotify= data;
    });

    
  }

  ngOnInit() {
  }

}
