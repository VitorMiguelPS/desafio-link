import { Component, OnInit } from '@angular/core';
import { MoviesRequestService } from 'src/app/movies-request.service';

@Component({
  selector: 'app-movie-informations',
  templateUrl: './movie-informations.component.html',
  styleUrls: ['./movie-informations.component.scss']
})
export class MovieInformationsComponent implements OnInit {

  movies: Array<any>;

  constructor(private movieService: MoviesRequestService) { }

  ngOnInit(): void {
    console.log(this.movies)
    this.list();
  }

  list(){
    this.movieService.list().subscribe(data => this.movies = data);
  }

}
