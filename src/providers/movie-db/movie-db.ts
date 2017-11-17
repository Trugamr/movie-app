import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieDbProvider {

  apiKey: string = 'a564e5e6ccf05956046bad91fa92f76c';

  constructor(public http: Http) {
    console.log('Hello MovieDbProvider Provider');
  }


  // searchMovie(movieName) {
  //   return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&query=' + movieName + '&include_adult=true').map((res: Response) => res.json());
  // }

  searchMovie(movieName) {
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&language=en-US&query=' + movieName + '&include_adult=true').map((res: Response) => res.json());
  }

  getDetails(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + this.apiKey ).map((res: Response) => res.json());
  }

  getCredits(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/credits?api_key=' + this.apiKey ).map((res: Response) => res.json());
  }
 
  getTrailers(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=' + this.apiKey + '&language=en-US').map((res: Response) => res.json());
  }

  getSimilar(movieId) {
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=' + this.apiKey + '&language=en-US&page=1').map((res: Response) => res.json());
  }

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1').map((res: Response) => res.json());
  }

  getUpcoming() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.apiKey + '&language=en-US&page=1').map((res: Response) => res.json());
  }
  
}

// coco '354912'