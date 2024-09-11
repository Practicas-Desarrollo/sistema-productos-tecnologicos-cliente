import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { ProductFormComponent } from './features/product/product-form/product-form.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import {CategoryListComponent} from "./features/category/category-list/category-list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'roles', component: ProductListComponent },
  { path: 'users', component: ProductListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'add-category', component: ProductFormComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'sales', component: ProductListComponent },
  { path: 'purchases', component: ProductListComponent },
  { path: 'menu', component: ProductListComponent },
  { path: 'reports', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
