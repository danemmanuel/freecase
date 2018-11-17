import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  itemList: AngularFireList<any>;

  itemArray = [];

  data = {
    name: '',
    telefone: ''
  };

  myUid: any;

  constructor(public db: AngularFireDatabase, public router: Router) {}

  onDelete($key) {
    this.itemList.remove($key);
  }

  getAllClientes() {
    this.itemList = this.db.list('clientes');
    return this.itemList.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val()
      }));
    });
  }
  moreInfo(key) {
    this.router.navigate(['dashboard/cliente/' + key]);
  }
}

export class ListItemClass {
  $key: string;
  name: string;
  telefone: string;
}
