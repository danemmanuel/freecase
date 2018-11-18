import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-listar-tasks',
  templateUrl: './listar-tasks.component.html',
  styleUrls: ['./listar-tasks.component.scss']
})
export class ListarTasksComponent implements OnInit {
  itemList: AngularFireList<any>;
  myUid: any;

  constructor(
    public db: AngularFireDatabase,
    private tasksServices: TasksService
  ) {}

  tasks = [];

  ngOnInit() {
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
    console.log(key);
    this.itemList.remove(key);
  }
}
