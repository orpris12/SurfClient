import { Component } from '@angular/core';
import {ProductService} from "../services/products.service";
import {Product} from "../models/Product";

@Component({
  selector: 'inner-component',
  templateUrl: './manage.component.html',
})
export class ManageComponent  {
  message: string = 'This is the manage component';
  products: Product[] = [];

  constructor(private _productService: ProductService) {}

  ngOnInit(){
    this._productService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }

  editProduct(product: Product){
    //use product service to update product
  }

  deleteProduct(product: Product){
    this._productService.getOneProduct(product._id).subscribe(product => console.log(JSON.stringify(product)));
  }
}
