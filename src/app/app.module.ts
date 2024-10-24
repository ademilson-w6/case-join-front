import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './product/list-product/home.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {ViewCategoryComponent} from "./category/view-category/view-category.component";
import {AddCategoryComponent} from "./category/add-category/add-category.component";
import {EditCategoryComponent} from "./category/edit-category/edit-category.component";
import {ListCategory} from "./category/list-category/list-category.component";
import { LoginComponent } from './login/login.component';
import {AddUserComponent} from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewProductComponent,
    AddProductComponent,
    EditProductComponent,

    // category

    ViewCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ListCategory,
    LoginComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
