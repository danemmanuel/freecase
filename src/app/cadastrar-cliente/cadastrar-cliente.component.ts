import { Component, OnInit } from '@angular/core';
import { ToastService } from "../_services/toast.service"
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import {Router} from "@angular/router";


@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {

  data = {
    name : '' ,
    telefone : ''
   } 
  
   email:string = '';
   uid:any;
   itemList: AngularFireList<any>
   
    constructor(public toastService: ToastService, private router: Router, private fire:AngularFireAuth ,public db:AngularFireDatabase) { 
      this.itemList = db.list('clientes')
  
      this.uid =  localStorage.getItem('uid')
      console.log( 'uid: '+ this.uid)
  
     
    }
  
    ngOnInit() {
      console.log(this.toastService.showToasst("loolololo"))
   console.log( this.data.name )
    }
  
   
    insertCliente(){
       
      this.itemList.push({
        uid : this.uid ,
        name : this.data.name ,
        telefone :  this.data.telefone
      })
      
      //this.router.navigate(['/clientes']);

  
    }
  

}
