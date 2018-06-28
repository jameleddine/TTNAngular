import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {CategoryserviceService} from './../../../services/categoryservice.service';

@Component({
  selector: 'app-detai-cat',
  templateUrl: './detai-cat.component.html',
  styleUrls: ['./detai-cat.component.css'],
  providers:[CategoryserviceService]
})
export class DetaiCatComponent implements OnInit {
  idRoute:any;
  detail : any = {};
  constructor(private route:ActivatedRoute,private http:HttpClient,private re:Router,private catservice:CategoryserviceService) { 
    this.route.params.subscribe(params=>{this.idRoute = params['id']})
  }

  ngOnInit() {
    this.catservice.getcategory(this.idRoute).subscribe(response=>{
      this.detail = response;
  })
  //   this.http.get("http://localhost:3000/category/"+this.idRoute).subscribe(response=>{
  //     this.detail = response;
  // })
  }

  updateCategory(detail,id){
    this.catservice.updatecategory(id,detail).subscribe(response=>{
      console.log(response);
      this.re.navigate(['/'])
    })
    // this.http.put("http://localhost:3000/category/"+id,detail).subscribe(response=>{
    //   console.log(response);
    //   this.re.navigate(['/'])
    // })
  }

}
