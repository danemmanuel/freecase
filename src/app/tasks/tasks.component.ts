import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  itemList: AngularFireList<any>;
  myUid: any;

  constructor(
    public db: AngularFireDatabase,
    private tasksServices: TasksService
  ) {}

  tasks = [];

  ngOnInit() {
    $('li').removeClass('active');
    $('.list_menu li:nth-child(3)').addClass('active');
    this.myUid = localStorage.getItem('uid');
    this.itemList = this.db.list('tasks');
    this.loadBlocks();
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

  excluirBlock(key) {
    this.itemList.remove(key);
  }
}
