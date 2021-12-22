import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailGuardService } from './services/product-detail-guard.service';

const routes: Routes = [
  {path: 'add', component: AddProductComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductDetailGuardService]},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
