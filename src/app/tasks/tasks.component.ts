import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { TasksService } from './tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  itemList: AngularFireList<any>;
  myUid: any;
  idTrello;
  cards;
  boards: Object;
  token;
  constructor(
    public router: Router,
    public db: AngularFireDatabase,
    private tasksServices: TasksService
  ) {}

  tasks = [];

  ngOnInit() {
    this.token = localStorage.getItem('trello_token');
    $('li').removeClass('active');
    $('.list_menu li:nth-child(3)').addClass('active');
    this.myUid = localStorage.getItem('uid');
    this.itemList = this.db.list('tasks');
    this.loadBlocks();
    this.getAuth();
  }

  loadBlocks() {
    this.tasksServices.getAllBlocks().subscribe(tasks => {
      this.tasks = [];
      tasks.forEach(task => {
        if (task.uid === this.myUid) {
          this.tasks.push(task);
        }
      });
    });
  }

  getAuth() {
    this.tasksServices.getAuth(this.token).subscribe(retorno => {
      this.idTrello = retorno['id'];

      this.tasksServices
        .getBoards(this.idTrello, this.token)
        .subscribe(retornoBoards => {
          this.boards = retornoBoards;
          this.tasksServices
            .getLists(retornoBoards[2].id, this.token)
            .subscribe(lists => {
              console.log(lists);
            });
        });
    });
  }

  getPerfils(id) {
    this.tasksServices.getPerfil(id, this.token).subscribe(perfil => {
      console.log(perfil['name']);
    });
  }

  openBoard(bord) {
    this.router.navigate(['dashboard/board/' + bord]);
  }

  excluirBlock(key) {
    this.itemList.remove(key);
  }
}
