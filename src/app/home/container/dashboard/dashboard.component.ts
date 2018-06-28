import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
listProduits:any = [];
listCategory:any = [];
  constructor( private http:HttpClient, private route:Router) { }

  ngOnInit() {
    this.http.get("http://localhost:3000/produits").subscribe(response=>{this.listProduits = response})
    this.http.get("http://localhost:3000/category").subscribe(res=>{this.listCategory = res})
  }
  getDetailProduit(produit){
    let id  = produit._id;
    this.route.navigate(['detail',id]);
  }

  getDetailCategory(category){
    let id  = category._id;
    this.route.navigate(['detailcat',id]);
  }

  deleteProduit(produit){
    let id = produit._id;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Product "+produit.code,
      icon: "warning",
      buttons: ["CANCEL","OKEY"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Product file has been deleted!", {
          icon: "success",
        });
        this.http.delete('http://localhost:3000/produits/'+id).subscribe(response=>{
          console.log(response);
          this.http.get("http://localhost:3000/produits").subscribe(response=>{this.listProduits = response})
        });
      } else {
        swal("Your Product file is safe!");
      }
    });
    
  }
  deleteCategory(category){
    let id = category._id;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Category "+category.code,
      icon: "warning",
      buttons: ["CANCEL","OKEY"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your Category file has been deleted!", {
          icon: "success",
        });
        this.http.delete('http://localhost:3000/category/'+id).subscribe(response=>{
          console.log(response);
          this.http.get("http://localhost:3000/category").subscribe(response=>{this.listCategory = response})
        });
      } else {
        swal("Your Category file is safe!");
      }
    });
  }
}
