import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatSortModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class AngularMaterialModule {}
