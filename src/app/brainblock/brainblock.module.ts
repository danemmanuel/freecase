import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrainblockComponent } from './brainblock.component';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarBrainblockComponent } from './cadastrar-brainblock/cadastrar-brainblock.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BrainblockComponent, CadastrarBrainblockComponent]
})
export class BrainblockModule {}
