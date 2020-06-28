import { Component, OnInit } from '@angular/core';
import { MoviesRequestService } from 'src/app/movies-request.service';

@Component({
  selector: 'app-request-movie',
  templateUrl: './request-movie.component.html',
  styleUrls: ['./request-movie.component.scss']
})
export class RequestMovieComponent implements OnInit {

  movies: Array<any>;

  constructor(private movieService: MoviesRequestService) { }

  ngOnInit(): void {
    this.list();
    console.log(this.movies);
  }

  list(){
    this.movieService.list().subscribe(data => this.movies = data);
  }

}
