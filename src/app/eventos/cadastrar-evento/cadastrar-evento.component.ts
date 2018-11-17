import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.component.html',
  styleUrls: ['./cadastrar-evento.component.css']
})
export class CadastrarEventoComponent implements OnInit {
  uid: any;
  itemList: AngularFireList<any>;
  myUid: any;
  formEvento: FormGroup;
  constructor(
    public db: AngularFireDatabase,
    private fire: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.myUid = localStorage.getItem('uid');
    this.itemList = this.db.list('eventos');
    this.construirForm();
  }

  construirForm() {
    this.formEvento = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      dataevento: new FormControl('', [Validators.required])
    });
  }

  insertEvento() {
    if (!this.formEvento.controls.titulo.invalid) {
      this.formEvento.value.dataevento = moment(
        this.formEvento.value.dataevento
      ).format('MM-DD-YYYY');
      console.log(this.formEvento.value.dataevento);
      this.itemList.push({
        uid: this.myUid,
        titulo: this.formEvento.value.titulo,
        dataevento: this.formEvento.value.dataevento
      });
      this.router.navigate(['/dashboard/eventos']);
    }
  }
}
