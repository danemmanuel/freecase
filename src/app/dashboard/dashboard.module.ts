import { EventosModule } from './../eventos/eventos.module';
import { TasksModule } from './../tasks/tasks.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from '../shared/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    TasksModule,
    EventosModule,
    CardModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
