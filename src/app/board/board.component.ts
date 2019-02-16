import { BoardService } from './board.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  received: any;
  cards;
  relatorio;
  members = [];
  aFazer = [];
  lists: Object;
  board: Object;
  qtdNotStarted = 0;
  qtdProgress = 0;
  qtdCompleted = 0;

  constructor(
    private route: ActivatedRoute,
    private _boardService: BoardService
  ) {
    this.route.params.subscribe(params => {
      this.received = params;
    });
  }

  ngOnInit() {
    this.getBoard();
    this.getCards();
  }

  getBoard() {
    this._boardService.getBoard(this.received.id).subscribe(board => {
      this.board = board;
    });
  }

  getCards() {
    this._boardService.getCards(this.received.id).subscribe(cards => {
      this.cards = cards;
      this.setStatus(this.cards);
    });
  }
  setStatus(cards: any) {
    this._boardService.getLists(this.received.id).subscribe(lists => {
      cards.forEach(card => {
        lists.forEach(element => {
          if (element.id === card.idList) {
            card['status'] = element;
          }
        });
        if (card['status']['name'].toLowerCase().includes('a fazer')) {
          this.qtdNotStarted++;
        } else if (card['status']['name'].toLowerCase().includes('fazendo')) {
          this.qtdProgress++;
        } else if (card['status']['name'].toLowerCase().includes('concluído')) {
          this.qtdCompleted++;
        }
      });
      this.cards = cards;
      this.setMembros(this.cards);
    });
  }
  setMembros(cards: any) {
    cards.forEach(card => {
      if (card.idMembers.length > 0) {
        card.idMembers.forEach(idmember => {
          this._boardService.getMembro(idmember).subscribe(membro => {
            card['membro'] = membro;
          });
        });
      }
    });
  }

  login() {
    this._boardService.login().subscribe(l => {
      console.log(l);
    });
  }
}
