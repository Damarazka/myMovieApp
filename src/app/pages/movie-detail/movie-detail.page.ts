import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    if (movieId !== null) {
      this.movieService.getMovieDetails(Number(movieId)).subscribe(response => {
        this.movie = response;
      });
    }
  }
}
