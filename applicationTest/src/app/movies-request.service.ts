import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesRequestService {

  moviesUrl = 'https://api-movies.gateway.linkapi.solutions/v1/movies';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<any[]>(`${this.moviesUrl}`);
  }
}
