import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class getInfos {
  lol:string
  constructor(private http: HttpClient) {
    this.lol="lolololololo"
  }
  get(){
    return this.lol
  }
  
 

}