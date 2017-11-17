import { Component, ViewChild, Renderer } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { MovieDbProvider } from '../../providers/movie-db/movie-db';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movieName: string;

@ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;
searchbox: HTMLElement;
searchcontainer: HTMLElement;

  SwipedTabsIndicator :any= null;
  tabs:any=[];
  popularMovies;
  upcomingMovies;
  value: boolean = true;

  firstsegment;

  
  constructor(public renderer: Renderer, public mdb: MovieDbProvider, public navCtrl: NavController) {
    this.tabs=["Popular","Upcoming"];
    this.mdb.getPopular().subscribe(res => {
      this.popularMovies = res.results;
      console.log(res.results);
    })
    this.mdb.getUpcoming().subscribe(res => {
      this.upcomingMovies = res.results;
      console.log(res.results);
    })
  }

  navigateToDetailsPage(movieId) {
    this.navCtrl.push('DetailsPage', {
      movieId: movieId
    })
  } 

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
    this.searchbox = document.getElementById("search-box");
    this.searchcontainer = document.getElementById("search-container");
    this.searchbox.style.display = "none";
    console.log();
    this.firstsegment = document.getElementsByClassName('segment-button');
    this.firstsegment[0].classList.add('segment-activated');
    this.firstsegment[1].classList.add('segment-activated');
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
    if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
    {
      this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
    }
    
    }

  animateIndicator($event) {
    if(this.SwipedTabsIndicator)
          this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  } 

  navigateResultsPage() {
    

    if(this.value) {
      this.searchbox.style.display = "";
      this.value = false;
      this.searchbox.focus();
    } else {
      
      this.navCtrl.push('ResultsPage', {
        movieName: this.movieName
      });

      this.searchbox.style.display = "none";
      this.value = true;
    }
  }

}
