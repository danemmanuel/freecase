import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { CadastrarTaskComponent } from './cadastrar-task/cadastrar-task.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  declarations: [TasksComponent, CadastrarTaskComponent]
})
export class TasksModule {}
