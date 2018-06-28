import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private route : Router) { }
  getUrlInfo(){
    if(this.route.url == "/login" || this.route.url == '/inscription'){
      return false;
    }
    return true;
  }
}
