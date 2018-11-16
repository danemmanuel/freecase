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

import { ClientesComponent } from './clientes.component';
import { DetailsClienteComponent } from './details-cliente/details-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { VerifyandgetloginComponent } from '../verifyandgetlogin/verifyandgetlogin.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule
  ],
  declarations: [
    ClientesComponent,
    DetailsClienteComponent,
    CadastrarClienteComponent,
    VerifyandgetloginComponent
  ],
  exports: [
    ClientesComponent,
    DetailsClienteComponent,
    CadastrarClienteComponent
  ]
})
export class ClientesModule {}
