import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getMoviesByKey(key: string, plot: string) {
    return this.httpClient.get(
      `api/movies/getMoviesByKey?key=${key}&plot=${plot}`
    );
  }

  getMovieById(imdb: string | null, plot: string) {
    return this.httpClient.get(
      `api/movies/getMovieById?imdb=${imdb}&plot=${plot}`
    );
  }
}
