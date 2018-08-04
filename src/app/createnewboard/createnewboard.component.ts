import { Component } from '@angular/core';
import {ProductService} from '../services/products.service';
import {Product} from '../models/Product';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-createbewboard',
  templateUrl: './createnewboard.component.html',

})

export class CreateNewBoardComponent  {
  submitted = false
  products: Array<Product>;
  constructor(private _productService: ProductService){}
 model=new Product();



  ngOnDestroy(){
  }

  onSubmit()
  {
    this.submitted=true;
    this._productService.insertProduct(this.model);
    console.log(this.model.name)
  }
}

