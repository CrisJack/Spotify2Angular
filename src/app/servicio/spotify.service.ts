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
      'Authorization' : 'Bearer BQA2zvB3yTAkGn8gFlVqaD7W5DFzaSmAh_GaQ0rabdyxk0cHIuIY2UW4qbOnM1-XZC3sUwzfAfsNrmpm2hLH5G2mWHHer8z-m_lM7rT-GDAp3z3TV0tXpldW17JyGWWziFYk_bPgZBBqVXWqwj_TkgwUP9ptUEs'
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


}
