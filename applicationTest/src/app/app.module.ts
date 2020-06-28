import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { LoginInformationComponent } from './components/login-information/login-information.component';
import { ProfileRegisterComponent } from './components/profile-register/profile-register.component';
import { MoviesListNotFoundComponent } from './components/movies-list-not-found/movies-list-not-found.component';
import { MoviesListFoundComponent } from './components/movies-list-found/movies-list-found.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieNotFoundComponent } from './components/movie-not-found/movie-not-found.component';
import { RequestMovieComponent } from './components/request-movie/request-movie.component';

import { MoviesRequestService } from './movies-request.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieInformationsComponent } from './components/movie-informations/movie-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    LoginInformationComponent,
    ProfileRegisterComponent,
    MoviesListNotFoundComponent,
    MoviesListFoundComponent,
    FavoriteMoviesComponent,
    FilmDetailsComponent,
    ProfileScreenComponent,
    SearchBarComponent,
    MovieNotFoundComponent,
    RequestMovieComponent,
    MovieInformationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    routing,
  ],
  providers: [MoviesRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
