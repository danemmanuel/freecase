import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  itemList: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {}

  getAllEvents() {
    this.itemList = this.db.list('eventos');
    return this.itemList.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val()
      }));
    });
  }
}
