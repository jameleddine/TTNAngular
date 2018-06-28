import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  myForm:FormGroup;
  email:string;
  password:string;
  
  constructor(private route : Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      emailF:new FormControl('',[Validators.required,Validators.email]),
      passwordF:new FormControl('',[Validators.required,Validators.minLength(4)]),
      rpasswordF:new FormControl('',[Validators.required,Validators.minLength(4)]),
    })
  }

  createUser(){
    let user = {
      email:this.email,
      password:this.password
    }
    localStorage.setItem('user',JSON.stringify(user));
    this.route.navigate(['/login']);
  }

}
