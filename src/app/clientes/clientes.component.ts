import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ClientesService } from './clientes.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  itemList: AngularFireList<any>;
  myUid: any;

  constructor(
    public db: AngularFireDatabase,
    public clientesService: ClientesService
  ) {}

  dataSource;
  displayedColumns: any[];
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  clientes: any = [];
  carregou: boolean;
  tableArr: any;

  ngOnInit() {
    this.clientes = [];
    this.myUid = localStorage.getItem('uid');
    this.itemList = this.db.list('clientes');
    this.createTable();

    $('li').removeClass('active');
    $('.list_menu li:nth-child(2)').addClass('active');
  }

  getRecord(element) {
    // console.log(element.$key);
    this.clientesService.moreInfo(element.uid);
  }
  createTable() {
    this.clientesService.getAllClientes().subscribe(clientes => {
      const tableArr: Cliente[] = clientes;
      this.dataSource = new MatTableDataSource(tableArr);
      this.dataSource.sort = this.sort;
      this.paginator._intl.itemsPerPageLabel = 'Clientes por página';
      this.dataSource.paginator = this.paginator;
      this.displayedColumns = ['name', 'email', 'telefone', 'acao'];
    });
  }

  onDelete(key) {
    this.itemList.remove(key);
  }
}
export interface Cliente {
  key: string;
  name: string;
  telefone: string;
}
