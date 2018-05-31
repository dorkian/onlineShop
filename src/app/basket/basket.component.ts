import { Component, OnInit } from '@angular/core';
import {MatTable} from '@angular/material';
import { ViewChild } from '@angular/core';
import { NgrxService } from 'src/app/serviceproviders/ngrx.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;//We would define instance of our table in this case for refresh table data after delete

  // Variables that needed for table
  displayedColumns = ['name','img','qty', 'price', 'delete'];
  basketItems: any=[];
  totalQty:number=0;

  constructor(private store: NgrxService) {   }

  ngOnInit() {
    this.fillBasket();//Recall ngrxService items to fill our table datasource variable
  }

  private fillBasket() {
    this.basketItems = this.store.items;
  }

  getQty(item,event){//Function called on change of qty input to calculate item price
    let itemPrice = item.price / item.qty;//Initial price of item
    let addedQty:number = event.target.value;//Get new value from event sent from UI
    item.qty = addedQty;
    item.price = addedQty * itemPrice;
  }

  getTotalCost(){//Function to calculate total price
    return this.basketItems.map(t => t.price).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  removeItem(index){//Function to remove item by index from our ngrx store
    this.store.removeItem(index);
    this.table.renderRows();
  }

}
