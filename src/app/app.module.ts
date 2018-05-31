import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//--> Import Animation library
import { MaterialModule } from './material.module';//--> Import Material Module we have just created

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';
import { ShippingComponent } from './shipping/shipping.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ShippinginfoComponent } from './shippinginfo/shippinginfo.component'; 

import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/product.reducer';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BasketComponent,
    ShippingComponent,
    PrivacyComponent,
    ShippinginfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,//--> Inject animation in our project
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({
      product: reducer
    }),
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
