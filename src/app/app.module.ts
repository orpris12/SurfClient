import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './NotFound/notFound.component';
import {CreateNewBoardComponent} from './shop/createnewboard/createnewboard.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProductService} from './services/products.service';
import {HttpModule} from '@angular/http';
import {ManageComponent} from "./manage/manage.component";
import {ManageModule} from "./manage/manage.module";
import {UpdateComponent} from "./manage/update/update.component";
import {ManageProductListComponent} from "./manage/list/manage.product.list.component";
import {FormsModule} from "@angular/forms";
import {ShopComponent} from "./shop/shop.component";

declare var maps: any;

const appRoutes: Routes = [
  {
    path: '', redirectTo: 'shop', pathMatch: 'full'
  },{
    path: 'manage', component: ManageComponent,
    children: [
      {
        path: 'list', component: ManageProductListComponent
      },
      {
        path: 'edit/:id', component: UpdateComponent
      }
    ]
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'create', component: CreateNewBoardComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];


@NgModule({
  imports:      [ BrowserModule,
                  RouterModule.forRoot(appRoutes),
                  HttpModule,
                  ManageModule,
                  FormsModule
  ],
  declarations: [ AppComponent, ShopComponent, NotFoundComponent, HomepageComponent,CreateNewBoardComponent , ManageComponent],
  providers: [ProductService],
  bootstrap:    [ AppComponent ],
})

export class AppModule {
}
