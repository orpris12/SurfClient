import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ShopComponent} from './shop/shop.component';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './NotFound/notFound.component';
import {CreateNewBoardComponent} from './createnewboard/createnewboard.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProductService} from './services/products.service';
import {HttpModule} from '@angular/http';
import {ManageComponent} from "./manage/manage.component";
import {ManageModule} from "./manage/manage.module";
import {UpdateComponent} from "./manage/update/update.component";
import {ManageProductListComponent} from "./manage/list/manage.product.list.component";
import {FormsModule} from "@angular/forms";

import {LoginComponent} from "./manage/login/login.component";

const appRoutes: Routes = [
  {
    path: '', component: HomepageComponent
  },{
    path: 'manage', component: ManageComponent, children: [
      {path: 'list', component: ManageProductListComponent},
      {path: 'edit/:id', component: UpdateComponent}
    ]
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'create', component: CreateNewBoardComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, ManageModule,FormsModule ],
  declarations: [ AppComponent, ShopComponent, NotFoundComponent, HomepageComponent,CreateNewBoardComponent , ManageComponent,LoginComponent ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ],
})

export class AppModule {
}
