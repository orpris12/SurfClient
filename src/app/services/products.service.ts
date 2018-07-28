import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/Product';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService{

  //this loads the http client into the service automatically
  constructor(private http: Http) {
  }

  getAllProducts(){
    return this.http.get('http://localhost:8080/api/products').map((res: Response) => {
        res.json();
    });
  }
}

