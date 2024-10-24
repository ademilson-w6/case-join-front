import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product/add-product/add-product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { HomeComponent } from './product/list-product/home.component';
import { ViewProductComponent } from './product/view-product/view-product.component';
import {EditCategoryComponent} from "./category/edit-category/edit-category.component";
import {ViewCategoryComponent} from "./category/view-category/view-category.component";
import {AddCategoryComponent} from "./category/add-category/add-category.component";
import {ListCategory} from "./category/list-category/list-category.component";
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/user.component";

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full'},
  { path: 'Home', component: HomeComponent },
  { path: 'ViewProduct/:productId', component: ViewProductComponent },
  { path: 'AddProduct', component: AddProductComponent },
  { path: 'EditProduct/:productId', component: EditProductComponent },

  // category

  // { path: 'Categorias', component: ListCategory },
  { path: 'ViewCategory/:categoryId', component: ViewCategoryComponent },
  { path: 'AddCategory', component: AddCategoryComponent },
  { path: 'EditCategory/:categoryId', component: EditCategoryComponent },
  { path: 'Categorias', component: ListCategory },
  { path: 'Login', component: LoginComponent },
  { path: 'AddUser', component: AddUserComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
