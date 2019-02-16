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
  setMembros(cards) {
    let arrIdMembers = [];
    const arrIdMemberFiltred = [];
    arrIdMembers = cards.map(elem => elem.idMembers);
    arrIdMembers.forEach(arrId => {
      arrId.forEach(element => {
        arrIdMemberFiltred.push(element);
      });
    });

    const uniqIds = this.remove_duplicates_es6(arrIdMemberFiltred);

    uniqIds.forEach(idmember => {
      this._boardService.getMembro(idmember).subscribe(membro => {
        membro['qtdNotStarted'] = 0;
        membro['qtdProgress'] = 0;
        membro['qtdCompleted'] = 0;
        membro['cards'] = [];
        this.members.push(membro);
      });
    });
    setTimeout(() => {
      this.setStatMember(this.members, cards);
    }, 3000);
  }

  setStatMember(membros, cards) {
    membros.forEach(membro => {
      cards.forEach(card => {
        card.idMembers.forEach(idMember => {
          if (idMember === membro.id) {
            membro['cards'].push(card);
          }
        });
      });
    });
    membros.forEach(membro => {
      membro.cards.forEach(card => {
        if (card.status.name.toLowerCase().includes('a fazer')) {
          membro.qtdNotStarted++;
        } else if (card.status.name.toLowerCase().includes('fazendo')) {
          membro.qtdProgress++;
        } else if (card.status.name.toLowerCase().includes('concluído')) {
          membro.qtdCompleted++;
        }
      });
    });

    console.log(membros);
    // this.countStat(this.memberComplet);
  }

  countStat(memberComplet) {
    console.log(memberComplet);
    memberComplet.forEach(element => {
      element.cards.forEach(card => {
        if (card.status.name.toLowerCase().includes('a fazer')) {
          element.qtdNotStarted++;
        } else if (card.status.name.toLowerCase().includes('fazendo')) {
          element.qtdProgress++;
        } else if (card.status.name.toLowerCase().includes('faturado')) {
          element.qtdCompleted++;
        }
      });
    });
    this.memberComplet = memberComplet;
  }
  remove_duplicates_es6(arr) {
    const s = new Set(arr);
    const it = s.values();
    return Array.from(it);
  }
}
