import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Product } from './../models/product.model'
import * as ProductActions from './../actions/product.actions';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgrxService {

  items:any=[];//Our basket items
  itemsChange : Subject<any[]> = new Subject<any[]>();//Observe if items changed

  constructor(private store: Store<AppState>) {//Inject Store from @ngrx/store into our constructor
    this.updateItems();
   }

  private updateItems() {
    this.itemsChange.subscribe((value) => {
      this.items = value;//Track items changed
    });
  }

  addNewItem(item: any) {
    //Create Product model from added product
    let newItem = {
      _id: item.id,
      code: item.code,
      name: item.name,
      description: item.description,
      img: item.img,
      price: item.price,
      qty: 1
    };
    this.store.dispatch(new ProductActions.AddProduct(newItem));//takes in the object and add it 
    this.getitems();//Refresh the basket items
  }

  removeItem(index){
    this.store.dispatch(new ProductActions.RemoveProduct(index));//takes in the object and remove it
    this.getitems();//Refresh the basket items
  }

  private getitems() {
    this.store.select('product').subscribe(data => {
      this.items = data;
    });
  }
}
