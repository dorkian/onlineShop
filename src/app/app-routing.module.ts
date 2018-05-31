import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { ShippinginfoComponent } from './shippinginfo/shippinginfo.component';
import { PrivacyComponent } from './privacy/privacy.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'products', component: ProductsComponent }, 
  { path: 'basket', component: BasketComponent }, 
  { path: 'shipping', component: ShippinginfoComponent }, 
  { path: 'privacy', component: PrivacyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }