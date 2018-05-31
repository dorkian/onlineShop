import { Component, OnInit } from '@angular/core';
import { ProductService } from '../serviceproviders/product.service';//Import our service provider
import { NgrxService } from '../serviceproviders/ngrx.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any=[];//List variable for products
  items:any=[];

  
  
  constructor(private prdSrv:ProductService,//Inject our service provider
    private store: NgrxService,
    private snackBar: MatSnackBar) {  
    
  }
  
  ngOnInit() {//Angular page load function that fires every time the page requested
    this.prdSrv.getAllProducts().subscribe(data => //Call our public function
      {this.products = data}//insert the result to local variable
    );
  }

  addToBasket(item){
      let found = this.store.items.find(i => i._id === item.id);//Check the items for avoid duplicate insert by check the unique id of product
      if(found == null){//If have not found any item insert the new item to basket
        this.store.addNewItem(item);
        this.snackBar.open(item.name + ' added to basket!', null, {//Show the message using material
          duration: 1000,
        });
      }
      else{//If an item with same id have found show a related message to user
        this.snackBar.open('item has already added to basket!', null, {
          duration: 2000,
        });
      }
  }


}
