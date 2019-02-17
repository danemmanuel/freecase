import { BoardService } from './board.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
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
  qtdNotStartedMember = 0;
  memberComplet = [];
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
    this.asynn();
  }

  async asynn() {
    const data = await this._boardService
      .getBoard(this.received.id)
      .toPromise();
    console.log(data);
  }
  getBoard() {
    this._boardService.getBoard(this.received.id).subscribe(board => {
      this.board = board;
    });
  }

  async getCards() {
    const cards = await this._boardService
      .getCards(this.received.id)
      .toPromise();
    this.setStatus(cards);
  }
  async setStatus(cards: any) {
    const lists = await this._boardService
      .getLists(this.received.id)
      .toPromise();
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
  }

  async setMembros(cards) {
    let arrIdMembers = [];
    const arrIdMemberFiltred = [];
    arrIdMembers = cards.map(elem => elem.idMembers);
    arrIdMembers.forEach(arrId => {
      arrId.forEach(element => {
        arrIdMemberFiltred.push(element);
      });
    });

    const uniqIds = this.remove_duplicates_es6(arrIdMemberFiltred);
    this.set(uniqIds, cards);
  }

  async set(uniqIds, cards) {
    await uniqIds.forEach(async idmember => {
      const membro = await this._boardService.getMembro(idmember).toPromise();

      membro['qtdNotStarted'] = 0;
      membro['qtdProgress'] = 0;
      membro['qtdCompleted'] = 0;
      membro['cards'] = [];
      this.members.push(membro);
      this.setStatMember(membro, cards);
      await membro;
    });
  }

  setStatMember(membro, cards) {
    console.log(membro);

    cards.forEach(card => {
      card.idMembers.forEach(idMember => {
        if (idMember === membro.id) {
          membro['cards'].push(card);
        }
      });
    });

    membro.cards.forEach(card => {
      if (card.status.name.toLowerCase().includes('a fazer')) {
        membro.qtdNotStarted++;
      } else if (card.status.name.toLowerCase().includes('fazendo')) {
        membro.qtdProgress++;
      } else if (card.status.name.toLowerCase().includes('concluído')) {
        membro.qtdCompleted++;
      }
    });
  }

  remove_duplicates_es6(arr) {
    const s = new Set(arr);
    const it = s.values();
    return Array.from(it);
  }
}
