import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieDbProvider } from '../../providers/movie-db/movie-db';


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  
  movieName: string;
  movieResults;

  fullStars: number;
  halfStar: boolean;

  constructor(private mdb: MovieDbProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.movieName = this.navParams.get('movieName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
    this.mdb.searchMovie(this.movieName).subscribe((data) => {
      this.movieResults = data.results;
      console.log(data);
    });
  }

  navigateToDetailsPage(movieId) {
    this.navCtrl.push('DetailsPage', {
      movieId: movieId
    })
  } 
  
  returnStars(rating) {
    this.fullStars = Math.floor(rating/2);
    if(rating - Math.floor(rating) >= 0.5) 
      this.halfStar = true;
    else 
      this.halfStar = false;
    return Array(Math.floor(rating/2)).fill(0);
  }
  
  navigateBack() {
    this.navCtrl.pop();
  }

  testfn(e){
    console.log('hide using scroll');
  }

}
