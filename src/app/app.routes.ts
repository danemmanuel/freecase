import { EventosComponent } from './eventos/eventos.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule, Routes } from '@angular/router';

import { HomesiteComponent } from './homesite/homesite.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CadastrarClienteComponent } from './clientes/cadastrar-cliente/cadastrar-cliente.component';
import { DetailsClienteComponent } from './clientes/details-cliente/details-cliente.component';
import { CadastrarEventoComponent } from './eventos/cadastrar-evento/cadastrar-evento.component';

const routes: Routes = [
  { path: '', component: HomesiteComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/clientes', component: ClientesComponent },
  {
    path: 'dashboard/cliente/:id',
    component: DetailsClienteComponent
  },
  {
    path: 'dashboard/clientes/cadastrar',
    component: CadastrarClienteComponent
  },
  { path: 'dashboard/tasks', component: TasksComponent },
  { path: 'dashboard/eventos', component: EventosComponent },
  { path: 'dashboard/evento/cadastrar', component: CadastrarEventoComponent }
];

export const routing = RouterModule.forRoot(routes);
