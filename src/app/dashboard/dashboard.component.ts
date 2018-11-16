import { Component, OnInit } from '@angular/core';
import { GetinfosService } from '../getinfos/getinfos.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private getinfosService: GetinfosService) {}

  public dataUser: User;

  ngOnInit() {
    $('li').removeClass('active');
    $('.list_menu li:nth-child(1)').addClass('active');

    this.dataUser = this.getinfosService.getinfos();
  }
}

export interface User {
  name: string;
  email: string;
  photoURL: string;
}
