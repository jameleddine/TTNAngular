import { Component, OnInit } from '@angular/core';
import {GlobalService} from './../services/global.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [GlobalService]
})
export class HomeComponent implements OnInit {
 urlInfo :boolean;
  constructor(private urlTest : GlobalService) { }

  ngOnInit() {
    console.log('oninit home');
    
  }
  ngDoCheck(){
    this.urlInfo = this.urlTest.getUrlInfo();
    console.log(this.urlInfo);
  }

}
