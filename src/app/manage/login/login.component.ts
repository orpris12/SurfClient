import { Component } from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";
//import { AuthService, AppGlobals } from 'angular2-google-login';
import { FormsModule }   from '@angular/forms';
@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
})

export class LoginComponent  {
 // constructor(private _googleAuth: AuthService){}
  Username: String
  Password: String
  ngOnInit() {
 //   AppGlobals.GOOGLE_CLIENT_ID = 'SECRET_CLIENT_ID';
  }
  onSubmit()
  {
  //TODO: on submit send the username&pass to google auth(dunno yet how to do that)
  }
}

