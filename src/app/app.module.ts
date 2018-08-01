import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ShopComponent} from './shop/shop.component';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './NotFound/notFound.component';
import {CreatenewboardComponent} from './createnewboard/createnewboard.component';
import {HomepageComponent} from './homepage/homepage.component';
import {ProductService} from './services/products.service';
import {HttpModule} from '@angular/http';

const appRoutes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'shop', component: ShopComponent
  },
  {
    path: 'createnewboard', component: CreatenewboardComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), HttpModule ],
  declarations: [ AppComponent, ShopComponent, NotFoundComponent, HomepageComponent,CreatenewboardComponent ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
}
