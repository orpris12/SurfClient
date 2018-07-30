import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/Product';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService{

  private allProductsUrl = 'http://localhost:8080/api/products'
  // private headers = new Headers();


  private products: Observable<Array<Product>> = new Observable<Array<Product>>();
  //this loads the http client into the service automatically
  constructor(private http: Http) {
    // this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // this.headers.append('Access-Control-Allow-Methods', 'GET');
    // this.headers.append('Access-Control-Allow-Origin', '*');
  }

    getAllProducts(): Observable<Product[]>{
      return this.http.get(this.allProductsUrl)
      // ...and calling .json() on the response to return data
        .map((res:Response) => res.json());
        //...errors if any

  }
}

