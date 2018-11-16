import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomesiteComponent } from './homesite/homesite.component';
import { LoginComponent } from './login/login.component';

import { AngularFireStorageModule } from 'angularfire2/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {MatButtonModule, MatSort, MatCheckboxModule, MatMenuModule, MatIconModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VerifyandgetloginComponent } from './verifyandgetlogin/verifyandgetlogin.component';
import { AsideComponent } from './aside/aside.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';

import * as $ from "jquery"
import { DataTablesModule } from 'angular-datatables';
import { TopbarComponent } from './topbar/topbar.component';

const routes:Routes = [
  { path:'' ,  component:HomesiteComponent },
  { path:'login' ,  component:LoginComponent },
  { path:'dashboard' ,  component:DashboardComponent },
  { path:'dashboard/clientes' ,  component:ClientesComponent },
  { path:'dashboard/cliente/detalhes/:id' ,  component: DetailsClienteComponent },
  { path:'dashboard/clientes/cadastrar' ,  component:CadastrarClienteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomesiteComponent,
    LoginComponent,
    DashboardComponent,
    VerifyandgetloginComponent,
    AsideComponent,
    ClientesComponent,
    CadastrarClienteComponent,
    DetailsClienteComponent,
    TopbarComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatButtonModule, 
    FormsModule,
    BrowserAnimationsModule,
    DataTablesModule,

  ],
  exports: [RouterModule, MatButtonModule, MatCheckboxModule],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
