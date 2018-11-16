import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import * as $ from "jquery"
import {ClientesService} from "./clientes.service"


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(public clientesService:ClientesService) { }
  
  ngOnInit() {
    
    this.clientesService.getClientes()

    $("li").removeClass("active")
    $(".list_menu li:nth-child(2)").addClass("active")
  
  }


  

}