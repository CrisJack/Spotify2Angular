import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {  
    // this.http.get('https://api.spotify.com/v1/browse/new-releases').subscribe(data=>{
    //   console.log(data);
    // })

   }

   getQuery(query){

    const headers = new HttpHeaders ({
      'Authorization' : 'Bearer BQC23e7P7yQeoUPCEAkDQtImd3ZrkFhwERbA-i6rTjnmRIkmjmRhBSScat_tGlmeCQprNPSxlsgSjzEBkJc'
    })

    const url ="https://api.spotify.com/v1";

    return this.http.get(`${url}${query}`,{headers});

   }

   fspotify(){
    
    const url="/browse/new-releases";
    return this.getQuery(url).pipe(map((data:any)=>data.albums.items))

    
   }   
  
   buscarSpotify(palabra:string){   

    const url=`/search?q=${palabra}&type=artist`;
    return this.getQuery(url).pipe(map((data:any)=>data.artists.items))

   }

    getArtist(item:any){
      
      //console.log(item);
      const url="/artists/";
      return this.getQuery(`${url}${item}`);

   }

   getTrack(item:any){

    // https://api.spotify.com/v1/artists/6ogn9necmbUdCppmNnGOdi/top-tracks?country=es

    const url1="/artists/";
    const url2="/top-tracks?country=es";

    return this.getQuery(`${url1}${item}${url2}`);

   }

   


}
