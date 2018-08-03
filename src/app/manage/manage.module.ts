import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ManageComponent }  from './manage.component';
import {ProductService} from '../services/products.service';
import {AppComponent} from "../app.component";


@NgModule({
  imports:      [ BrowserModule],
  declarations: [  ],
  providers: [],
  bootstrap:    [ AppComponent ]
})

export class ManageModule {
}
