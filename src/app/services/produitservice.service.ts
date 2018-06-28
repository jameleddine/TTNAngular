import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  url:string = "http://localhost:3000/produits/";
  constructor(private http:HttpClient) { }

  createProduct(data){
    return this.http.post(this.url,data);
  }
  getAllProduct(){
      return this.http.get(this.url);
  }
  getProduct(id){
    return this.http.get(this.url+id)
  }
  deleteProduct(id){
    return this.http.delete(this.url+id)
  }
  updateProduct(id,data){
    return this.http.put(this.url+id,data)
  }

}
