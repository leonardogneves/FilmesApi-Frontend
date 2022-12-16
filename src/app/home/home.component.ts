import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resultadoFilme: any;

  constructor(
    public movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.listarTodosProdutos();
    this.pegaFilme();
  }

  pegaFilme() {
    this.movieService.listarTodosProdutos().subscribe((r: any) => {
      this.resultadoFilme = r;
    })
  }

}
