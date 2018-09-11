import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  textToSearch: string="";
  areValues:boolean=false;

  constructor(public _spotifyService: SpotifyService) {
    
   }

   searchArtists(){

    if(this.textToSearch.length < 3){
      return;
    }

     console.log(this.textToSearch);
     this._spotifyService.getArtists(this.textToSearch)
    .subscribe(response=>{
      console.log('Information ready');
      console.log(response);
      
    });
   }

}
