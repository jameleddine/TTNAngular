import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  url:string = "http://localhost:3000/category/";
  constructor(private http:HttpClient) { }

  createcategory(data){
    return this.http.post(this.url,data);
  }
  getAllcategory(){
      return this.http.get(this.url);
  }
  getcategory(id){
    return this.http.get(this.url+id)
  }
  deletecategory(id){
    return this.http.delete(this.url+id)
  }
  updatecategory(id,data){
    return this.http.put(this.url+id,data)
  }
}
