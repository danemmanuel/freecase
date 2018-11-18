import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cadastrar-task',
  templateUrl: './cadastrar-task.component.html',
  styleUrls: ['./cadastrar-task.component.css']
})
export class CadastrarTaskComponent implements OnInit {
  uid: any;
  formBlock: FormGroup;
  itemList: AngularFireList<any>;
  refresh: Subject<any> = new Subject();

  constructor(public db: AngularFireDatabase) {
    this.uid = localStorage.getItem('uid');
    this.itemList = db.list('tasks');
  }

  ngOnInit() {
    this.construirForm();
  }

  construirForm() {
    this.formBlock = new FormGroup({
      titulo: new FormControl('')
    });
  }

  insertBlock() {
    if (!this.formBlock.controls.titulo.invalid) {
      this.itemList.push({
        uid: this.uid,
        titulo: this.formBlock.value.titulo
      });
      this.formBlock.reset();
    }
    this.refresh.next();
  }
}
