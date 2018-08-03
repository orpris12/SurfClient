import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../models/Product';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService{

  private allProductsUrl = 'http://localhost:8080/api/products';
  private productUrl = 'http://localhost:8080/api/product/:id';
  private updateProductUrl = 'http://localhost:8080/api/product/update/:id';
  private deleteProductUrl = 'http://localhost:8080/api/product/delete/:id'
  // private headers = new Headers();


  private products: Observable<Array<Product>> = new Observable<Array<Product>>();

  //this loads the http client into the service automatically
  constructor(private http: Http) {

  }
    getAllProducts(): Observable<Product[]>{
      return this.http.get(this.allProductsUrl)
      // ...and calling .json() on the response to return data
        .map((res:Response) => res.json());
        //...errors if any
  }

  getOneProduct(id: string): Observable<Product>{
    return this.http.get(this.productUrl.replace(':id',id))
      .map((res: Response) => res.json());
  }

  updateProduct(product: Product){
    return this.http.post(this.updateProductUrl.replace(':id', product._id),JSON.stringify(product))
      .map((res: Response) => res.json());
  }

  deleteProduct(id: string){
    return this.http.delete(this.deleteProductUrl.replace(':id', id))
      .map((res: Response) => res.json());
  }
}

