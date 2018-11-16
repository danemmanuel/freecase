import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatSortModule,
  MatCheckboxModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
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
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSortModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  declarations: []
})
export class AngularMaterialModule {}
