import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : any = {email:"",password:""}
  userFromLocalStorage:any = JSON.parse(localStorage.getItem('user')) || {};
  
  constructor(private route : Router) { }

  ngOnInit() {
  }

  login(data){

    if(data.email == this.userFromLocalStorage.email && data.password == this.userFromLocalStorage.password){
      this.route.navigate(['/'])
    }
    else{
      swal("Wrong", "email or password invalid!", "error");
    }

  }

}
