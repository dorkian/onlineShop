import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
//import { MatSidenav } from '@angular/material';
import { NgrxService } from 'src/app/serviceproviders/ngrx.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Online Shop App';
  items:any=[];

  constructor(private store: NgrxService) {

  }

  getItemsCount(){
    return this.store.items.length;
  }

}