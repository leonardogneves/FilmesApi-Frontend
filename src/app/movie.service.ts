import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly apiURL : string = '/Filme';

  constructor(
    private http: HttpClient
  ) { }

  listarTodosProdutos(): Observable<any> {
    return this.http.get("https://localhost:7024" + this.apiURL);
  }
}
