import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private httpclient: HttpClient) {}

  getBoard(id) {
    return this.httpclient.get(
      `https://api.trello.com/1/boards/${id}/?key=7c1d7657d4fea36a03f8b245deeb75d1&token=5975dd19f2aeb31e435468a3f0334b5ed58435e7f16de05b6d86c3a7521f8465`,
      {}
    );
  }
  getCards(id) {
    return this.httpclient.get(
      `https://api.trello.com/1/boards/${id}/cards?key=7c1d7657d4fea36a03f8b245deeb75d1&token=5975dd19f2aeb31e435468a3f0334b5ed58435e7f16de05b6d86c3a7521f8465`,
      {}
    );
  }

  getLists(id) {
    return this.httpclient.get<any>(
      `https://api.trello.com/1/boards/${id}/lists?key=7c1d7657d4fea36a03f8b245deeb75d1&token=5975dd19f2aeb31e435468a3f0334b5ed58435e7f16de05b6d86c3a7521f8465`,
      {}
    );
  }

  getMembro(id) {
    return this.httpclient.get(
      `https://api.trello.com/1/members/${id}/?key=7c1d7657d4fea36a03f8b245deeb75d1&token=5975dd19f2aeb31e435468a3f0334b5ed58435e7f16de05b6d86c3a7521f8465`,
      {}
    );
  }

  login() {
    return this.httpclient.get(`http://localhost:3000/login`, {});
  }
}
