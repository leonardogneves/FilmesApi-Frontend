import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showApresentacao: boolean = false;
  showSobreMim: boolean = false;

  constructor() { }

  ngOnInit() {
    this.showBtnApresentacao();
    this.showSobreMim == false;
  }


  showBtnApresentacao () {
    setTimeout(()=>{
      this.showApresentacao = true;
  }, 3500);
  };

  showMsgSobreMim () {
    this.showSobreMim

  }
}
