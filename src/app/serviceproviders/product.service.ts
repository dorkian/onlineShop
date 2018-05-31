import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Import HttpClient

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }//Inject HttpClient as http

  public getAllProducts(){//Public function to get json file
    return this.http.get("./assets/products.json");
  }
}
