import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  idRoute : any;
  detail : any = {};
  a:number;
  b:number;
  constructor(private route:ActivatedRoute,private http:HttpClient,private re:Router) {
    // get param 'id' from url
    this.route.params.subscribe(params=>{this.idRoute = params['id']})

   }

  ngOnInit() {
    this.http.get("http://localhost:3000/produits/"+this.idRoute).subscribe(response=>{
      this.detail = response;
  })
  }

  updateProduct(detail,id){
    this.http.put("http://localhost:3000/produits/"+id,detail).subscribe(response=>{
      console.log(response);
      this.re.navigate(['/'])
    })
  }
  // calculate(a,b){
  //   console.log(a+b)
  //  return a+b;
  // }

}
