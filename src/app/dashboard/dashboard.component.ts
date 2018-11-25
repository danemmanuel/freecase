import { LoadingService } from './../shared/loading/loading.service';
import { BrainblockService } from './../brainblock/brainblock.service';
import { EventosService } from './../eventos/eventos.service';
import { TasksService } from './../tasks/tasks.service';
import { ClientesService } from './../clientes/clientes.service';
import { Component, OnInit } from '@angular/core';
import { GetinfosService } from '../getinfos/getinfos.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private clientesService: ClientesService,
    private tasksService: TasksService,
    private eventosService: EventosService,
    private brainblockService: BrainblockService,
    private loadingService: LoadingService
  ) {}

  public dataUser: User;
  countsCards = [];
  countClientes = 0;
  countTasks = 0;
  countEventos = 0;
  countBlocks = 0;

  ngOnInit() {
    this.resetCounts();
    $('li').removeClass('active');
    $('.list_menu li:nth-child(1)').addClass('active');

    this.getCountsCards();
  }

  getCountsCards() {
    this.clientesService.getAllClientes().subscribe(clientes => {
      this.countClientes = 0;
      clientes.forEach(cliente => {
        if (cliente.uid === localStorage.getItem('uid')) {
          this.countClientes++;
        }
      });
    });

    this.tasksService.getAllBlocks().subscribe(tasks => {
      this.countTasks = 0;
      tasks.forEach(task => {
        if (task.uid === localStorage.getItem('uid')) {
          this.countTasks++;
        }
      });
    });

    this.eventosService.getAllEvents().subscribe(eventos => {
      this.countEventos = 0;
      eventos.forEach(evento => {
        if (evento.uid === localStorage.getItem('uid')) {
          this.countEventos++;
        }
      });
    });

    this.brainblockService.getAllBlocks().subscribe(blocks => {
      this.countBlocks = 0;
      blocks.forEach(block => {
        if (block.uid === localStorage.getItem('uid')) {
          this.countBlocks++;
        }
      });
    });
  }

  resetCounts() {
    this.countClientes = 0;
    this.countTasks = 0;
    this.countEventos = 0;
    this.countBlocks = 0;
  }
}

export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
}
