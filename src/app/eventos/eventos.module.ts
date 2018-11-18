import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EventosComponent } from './eventos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CadastrarEventoComponent } from './cadastrar-evento/cadastrar-evento.component';
import { ListarEventosComponent } from './listar-eventos/listar-eventos.component';

registerLocaleData(localePt);

@NgModule({
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventosComponent,
    CadastrarEventoComponent,
    ListarEventosComponent
  ],
  exports: [EventosComponent, CadastrarEventoComponent, ListarEventosComponent]
})
export class EventosModule {}
