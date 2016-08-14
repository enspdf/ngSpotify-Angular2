import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { routing, appRouterProviders } from './app.routes';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../app/components/search/search.component';
import { AboutComponent } from '../app/components/about/about.component';
import { ArtistComponent } from '../app/components/artist/artist.component';
import { AlbumComponent } from '../app/components/album/album.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, SearchComponent, AboutComponent, ArtistComponent, AlbumComponent ],
  providers: [appRouterProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
