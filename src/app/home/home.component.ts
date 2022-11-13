import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  apresentacaoValidate: boolean = false;

  constructor() { }

  ngOnInit() {
    this.teste();
  }


  teste () {
    this.apresentacaoValidate = false;
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.apresentacaoValidate = true;
  }, 3500);
  };
}
