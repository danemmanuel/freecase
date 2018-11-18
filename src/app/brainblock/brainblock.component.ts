import { BrainblockService } from './brainblock.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as $ from 'jquery';
import { BrainBlock } from './brainblock';

@Component({
  selector: 'app-brainblock',
  templateUrl: './brainblock.component.html',
  styleUrls: ['./brainblock.component.css']
})
export class BrainblockComponent implements OnInit {
  itemList: AngularFireList<any>;
  myUid: any;

  constructor(
    public db: AngularFireDatabase,
    private brainBlockService: BrainblockService
  ) {}

  brainBlocks: BrainBlock[] = [];

  ngOnInit() {
    $('li').removeClass('active');
    $('.list_menu li:nth-child(5)').addClass('active');
    this.myUid = localStorage.getItem('uid');
    this.itemList = this.db.list('clientes');
    this.loadBlocks();
  }

  loadBlocks() {
    this.brainBlockService.getAllBlocks().subscribe(blocks => {
      this.brainBlocks = blocks;
    });
  }
}
