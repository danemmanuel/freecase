import { Component, OnInit } from '@angular/core';
import { GetinfosService } from '../getinfos/getinfos.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private getinfosService:GetinfosService) {  }

  public dataUser:User

  changeDark(){
    $('body').addClass("dark")
  }

  changeLight(){
    $('body').removeClass("dark")
  }

  ngOnInit() {
    this.dataUser = this.getinfosService.getinfos()
  }

}

export interface User {
  name:string;
  email:string;
  photoURL:string;
}