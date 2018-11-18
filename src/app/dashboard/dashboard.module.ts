import { EventosModule } from './../eventos/eventos.module';
import { TasksModule } from './../tasks/tasks.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    TasksModule,
    EventosModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
