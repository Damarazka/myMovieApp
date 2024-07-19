import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  movies: any[] = [];
  searchQuery: string = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadPopularMovies();
  }

  loadPopularMovies() {
    this.movieService.getPopularMovies().subscribe(response => {
      this.movies = response.results;
    });
  }

  searchMovies() {
    if (this.searchQuery.trim() === '') {
      this.loadPopularMovies();
    } else {
      this.movieService.searchMovies(this.searchQuery).subscribe(response => {
        this.movies = response.results;
      });
    }
  }
}
