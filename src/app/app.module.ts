import { LoadingModule } from './shared/loading/loading.module';
import { BrainblockModule } from './brainblock/brainblock.module';
import { TasksModule } from './tasks/tasks.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomesiteComponent } from './homesite/homesite.component';
import { LoginComponent } from './login/login.component';

import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AsideComponent } from './aside/aside.component';
import { routing } from './app.routes';

import * as $ from 'jquery';
import { DataTablesModule } from 'angular-datatables';
import { TopbarComponent } from './topbar/topbar.component';
import { ClientesModule } from './clientes/clientes.module';
import { EventosModule } from './eventos/eventos.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomesiteComponent,
    LoginComponent,
    AsideComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    FormsModule,
    routing,
    AngularMaterialModule,
    BrowserAnimationsModule,
    DataTablesModule,
    ClientesModule,
    TasksModule,
    EventosModule,
    BrainblockModule,
    DashboardModule,
    LoadingModule
  ],
  exports: [RouterModule],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
