import { Component, OnInit } from '@angular/core';
import { NgrxService } from 'src/app/serviceproviders/ngrx.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-shippinginfo',
  templateUrl: './shippinginfo.component.html',
  styleUrls: ['./shippinginfo.component.scss']
})
export class ShippinginfoComponent implements OnInit {
  basketItems: any=[];
  shippingInfo = {
    fName:"",
    lName:"",
    address:"",
    city:"",
    state:"",
    postalCode:0
  };

  constructor(private store: NgrxService,
    private snackBar: MatSnackBar) {
    this.basketItems = this.store.items;
   }

  ngOnInit() {
  }

  confirmOrder(){
    this.snackBar.open('Dear ' + this.shippingInfo.fName + ' your order confirmed & will be processed soon.', null, {
      duration: 5000,
    });
  }

}
