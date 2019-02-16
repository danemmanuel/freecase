import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  itemList: AngularFireList<any>;

  constructor(private httpclient: HttpClient, public db: AngularFireDatabase) {}

  getAllBlocks() {
    this.itemList = this.db.list('tasks');
    return this.itemList.snapshotChanges().map(changes => {
      return changes.map(c => ({
        key: c.payload.key,
        ...c.payload.val()
      }));
    });
  }

  getAuth(token) {
    return this.httpclient.get(
      `https://api.trello.com/1/members/me/?key=7c1d7657d4fea36a03f8b245deeb75d1&token=${token}`,
      {}
    );
  }

  getBoards(id, token) {
    return this.httpclient.get(
      // tslint:disable-next-line:max-line-length
      `https://api.trello.com/1/members/${id}/boards/?key=7c1d7657d4fea36a03f8b245deeb75d1&token=${token}`,
      {}
    );
  }

  getCards(id, token) {
    return this.httpclient.get(
      `https://api.trello.com/1/boards/${id}/cards?key=7c1d7657d4fea36a03f8b245deeb75d1&token=${token}`,
      {}
    );
  }

  getPerfil(id, token) {
    return this.httpclient.get(
      `https://api.trello.com/1/members/${id}/?key=7c1d7657d4fea36a03f8b245deeb75d1&token=${token}`,
      {}
    );
  }

  getLists(id, token) {
    return this.httpclient.get(
      `https://api.trello.com/1/boards/${id}/lists?key=7c1d7657d4fea36a03f8b245deeb75d1&token=${token}`,
      {}
    );
  }
}
