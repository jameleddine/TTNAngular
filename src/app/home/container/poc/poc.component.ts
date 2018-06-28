import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit {

  title : string = "Hi im here";
  bool : boolean = true;
  bool2 : boolean = false;
  srcimg : string = "http://nysurfsoccer.org/wp-content/uploads/2017/03/IMG.png";
  count:number = 0;
  name:string;
  email:string;
  phone:number;
  about:string;
  user : any;
  HEROES = [
   {id: 1, name:'Superman'},
   {id: 2, name:'Batman'},
   {id: 5, name:'BatGirl'},
   {id: 3, name:'Robin'},
   {id: 4, name:'Flash'}
 ];
 
   constructor() { 
     console.log('constructor container')
   }
 
   ngOnInit() {
     console.log('oninit container')
   }
 
   callFunction(){
     alert('hello')
   }
   decrement(){
     this.count --;
   }
   increment(){
     this.count ++;
   }
   valider(){
     let data = {
       name:this.name,
       email:this.email,
       phone:this.phone,
       about:this.about
     }
     console.log(data);
     this.user = data;
   }
   annuler(){
     this.name = "";
     this.email = "";
     this.phone = null;
     this.about = "";
   }

}
