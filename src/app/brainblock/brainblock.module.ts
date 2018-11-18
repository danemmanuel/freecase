import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrainblockComponent } from './brainblock.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BrainblockComponent]
})
export class BrainblockModule {}
