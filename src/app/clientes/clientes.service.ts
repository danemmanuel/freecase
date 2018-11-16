import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import * as $ from "jquery"

@Injectable({
  providedIn: 'root'
})


export class ClientesService {

  itemList: AngularFireList<any>

  itemArray = []

  data = {
  name : '' ,
  telefone :  '' 
  } 

myUid:any

  constructor(public db:AngularFireDatabase , public router:Router) { }

  getClientes(){
    
    this.myUid =  localStorage.getItem('uid')
    
    this.itemList = this.db.list('clientes')

    this.itemList.snapshotChanges()
    .subscribe(actions=>{
      this.itemArray = []
          actions.forEach(action=>{
            
            let y = action.payload.toJSON()
            y["$key"] = action.key
            
            this.itemArray.push(y as ListItemClass)
           
          })
    })
    
  }

  editForm( $key){

    for (let value of  this.itemArray) {
      if (value['$key'] == $key) {
        console.log(value['$key'])
        this.data.name = value['name'] ;
        this.data.telefone = value['telefone'] ;
      }
     
      
    }
  }

  onEdit( $key ){
 
    this.data.name 
    this.data.telefone

    this.itemList.set($key , {
      name : this.data.name ,
      phone :  this.data.telefone
    })
  
    this.itemArray = []

  }

  onDelete( $key){
    this.itemList.remove($key);
    this.getClientes()
  }

  moreInfo(key){
    this.router.navigate(['dashboard/cliente/detalhes/'+key])
  }

}

export class ListItemClass{
  $key: string;
  name : string;
  telefone :  string;
}
