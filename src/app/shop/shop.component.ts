import { Component } from '@angular/core';
import {ProductService} from '../services/products.service';
import {Product} from '../models/Product';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'my-app',
  templateUrl: './shop.component.html',
})

export class ShopComponent  {
  products: Product[];
  productsSubscription: Subscription;
  constructor(private _productService: ProductService){}

  ngOnInit() {
    this.productsSubscription = this._productService.getAllProducts().subscribe((products) => {
      console.log(`got products : ${products}`);
      this.products = products;
    });
  }

  ngOnDestroy(){
      this.productsSubscription.unsubscribe();
  }

}
