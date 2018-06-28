import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ProduitserviceService} from './../../../services/produitservice.service';


@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
  // providers:[ProduitserviceService]
})
export class ParametreComponent implements OnInit {
codeP:string;
libelleP:string;
prixP:number;
codeC:string;
designationC:string;
categoryP:any;
listCategory :any = [];
  constructor(private http:HttpClient, private route:Router,private productService: ProduitserviceService) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/category").subscribe(res=>{this.listCategory = res})
  }

  ajoutProduit(){
    let data = {
      code:this.codeP,
      libelle:this.libelleP,
      prix:this.prixP,
      categories:this.categoryP
    }
    this.productService.createProduct(data).subscribe(response=>{
      console.log(response);
      this.route.navigate(['/'])
    })
    // this.http.post('http://localhost:3000/produits',data).subscribe(response=>{
    //   console.log(response);
    //   this.route.navigate(['/'])
    // })
  }

  ajoutCategory(){
    let data = {
      code:this.codeC,
      designation:this.designationC
      
    }
    this.http.post('http://localhost:3000/category',data).subscribe(response=>{
      console.log(response);
      this.route.navigate(['/']);
    })
  }

}
