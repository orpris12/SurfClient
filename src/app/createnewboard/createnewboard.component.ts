import { Component } from '@angular/core';
import {ProductService} from '../services/products.service';
import {Product} from '../models/Product';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'inner-component',
  templateUrl: './createnewboard.component.html',
})

export class CreateNewBoardComponent  {
  products: Array<Product>;
  constructor(private _productService: ProductService){}

  ngOnInit() {
    this._productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnDestroy(){
  }

}

