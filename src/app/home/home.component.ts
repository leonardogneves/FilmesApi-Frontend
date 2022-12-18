import { Tmdb } from './../../models/tmdb.model';
import { TmdbService } from './../services/tmdb.service';
import { MovieService } from '../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public id: number = 700;
  movie: any;

  topRated: any;
  responsiveOptions;
  loader = true;
  totalResults: any;
  total_results: any;
  searchRes: any;
  searchStr: string = '';
  genero: any;

  resultadoFilme: any;
  resultadoTmdbFilme: any;
  tmdb!: Tmdb;

  constructor(
    public movieService: MovieService,
    public tmdbService: TmdbService
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit() {
    this.pegaFilmes();
    this.getSingleMoviesDetails();
    this.getTopRatedMovies(1);
  }

  // Filme da minha api
  pegaFilmes() {
    this.movieService.listarTodosProdutos().subscribe((r: any) => {
      this.resultadoFilme = r;
    })
  }

  // Filmes da api TMDB
  getSingleMoviesDetails(){
    this.tmdbService.getGenres().subscribe((res: any) => {
      this.genero = res;
      console.log(this.genero);
    });
  }

  getTopRatedMovies(page: number) {
    this.tmdbService.getTopRatedMovies(page).pipe(delay(2000)).subscribe((res: any) => {
      this.topRated = res.results;
      this.totalResults = res.total_results;
      this.loader = false;
    },
    error => console.log(error));
  }

  changePage(e: any) {
    this.loader = true;
    this.getTopRatedMovies(e.pageIndex + 1);
  }

  searchMovies() {
    this.tmdbService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    });
  }
}
