import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as $ from 'jquery';
import { ClientesService } from './clientes.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

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
    this.clientesService.moreInfo(element.uid);
  }
  createTable() {
    this.clientesService.getAllClientes().subscribe(clientes => {
      const tableArr: Cliente[] = [];
      clientes.forEach(cliente => {
        if (cliente.uid === this.myUid) {
          tableArr.push(cliente);
        }
      });
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface Cliente {
  key: string;
  name: string;
  telefone: string;
}
