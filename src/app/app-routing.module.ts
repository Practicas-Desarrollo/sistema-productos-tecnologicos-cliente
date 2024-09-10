import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
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
