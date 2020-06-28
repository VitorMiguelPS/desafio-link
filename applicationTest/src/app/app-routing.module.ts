import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MoviesListNotFoundComponent } from './components/movies-list-not-found/movies-list-not-found.component';
import { AppComponent } from './app.component';
import { MoviesListFoundComponent } from './components/movies-list-found/movies-list-found.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { ProfileScreenComponent } from './components/profile-screen/profile-screen.component';
import { RequestMovieComponent } from './components/request-movie/request-movie.component';


const routes: Routes = [
  {path: '', component: ProfileScreenComponent},
  {path: 'movieslistnotfound', component: MoviesListNotFoundComponent},
  {path: 'movieslist', component: MoviesListFoundComponent},
  {path: 'favoritemovies', component: FavoriteMoviesComponent},
  {path: 'filmdetails', component: FilmDetailsComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
