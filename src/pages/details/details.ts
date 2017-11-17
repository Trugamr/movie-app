import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDbProvider } from '../../providers/movie-db/movie-db';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})


export class DetailsPage {
  
  movieId: number;
  movieDetails;
  movieCredits;
  movieCast;
  movieTrailers;
  movieSimilar;
  value;
  release_date_final;
  months: string[] = ['heeh', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  fullStars: number;
  halfStar: boolean;

  constructor(public el: ElementRef, public mdb: MovieDbProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.movieId = this.navParams.get('movieId');
  }

  ionViewDidLoad() {    
    this.mdb.getDetails(this.movieId).subscribe(res => {
      this.release_date_final= this.months[parseInt(res.release_date.split('-')[1])] + ' ' + res.release_date.split('-')[2] + ', ' + res.release_date.split('-')[0];
      this.movieDetails = res;
      console.log(this.movieDetails);
    }) 
    this.mdb.getCredits(this.movieId).subscribe(res => {
      this.movieCredits = res;
      this.movieCast = res.cast;
      console.log(res.cast);
    })
    this.mdb.getTrailers(this.movieId).subscribe(res => {
      this.movieTrailers = res.results;
      console.log(res.results);
    })
    this.mdb.getSimilar(this.movieId).subscribe(res => {
      this.movieSimilar = res.results;
      console.log(res.results);
    })
    this.value = 'info';
    console.log(this.el);
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateToDetailsPage(movieId) {
    this.navCtrl.push('DetailsPage', {
      movieId: movieId
    })
  } 

  openYoutube(ytId) {
    window.open('https://youtu.be/' + ytId, '_blank');
  }

  openOfficialWebsite(url) {
    window.open(url, '_blank');
  }

  returnStars(rating) {
    this.fullStars = Math.floor(rating/2);
    if(rating - Math.floor(rating) >= 0.5) 
      this.halfStar = true;
    else 
      this.halfStar = false;
    return Array(Math.floor(rating/2)).fill(0);
  }

}
