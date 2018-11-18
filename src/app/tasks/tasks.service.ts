import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  itemList: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {}

  getAllBlocks() {
    this.itemList = this.db.list('tasks');
    return this.itemList.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val()
      }));
    });
  }
}
