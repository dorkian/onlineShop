import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [MatButtonModule,MatSidenavModule,MatCardModule,MatInputModule,MatFormFieldModule,MatTableModule,MatIconModule,MatToolbarModule,MatListModule,MatSnackBarModule],
  exports: [MatButtonModule,MatSidenavModule,MatCardModule,MatInputModule,MatFormFieldModule,MatTableModule,MatIconModule,MatToolbarModule,MatListModule,MatSnackBarModule],
})
export class MaterialModule { }