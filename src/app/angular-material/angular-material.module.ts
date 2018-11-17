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
  MatRippleModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule
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
    MatRippleModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
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
    MatRippleModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: []
})
export class AngularMaterialModule {}
