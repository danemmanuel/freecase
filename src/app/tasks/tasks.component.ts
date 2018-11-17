import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('li').removeClass('active');
    $('.list_menu li:nth-child(3)').addClass('active');
  }
}
