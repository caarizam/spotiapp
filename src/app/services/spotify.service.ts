import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistList:any[] = [];

  constructor(public http:HttpClient) { 
    console.log('Spotify service ready');
  }

  getArtists(textToSearch:string){
    let url:string = `https://api.spotify.com/v1/search?query=${textToSearch}&type=artist&limit=30`;

    let headers = new HttpHeaders({
      'authorization': 'Bearer fff'
    })

    return this.http.get(url, {headers:headers})
    .map( (response:any) =>{
      this.artistList = response.artists.items;
      return this.artistList;
    });
    //.subscribe(response=>{
      //console.log(response);
    //});
  }

}
