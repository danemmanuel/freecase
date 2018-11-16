import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homesite',
  templateUrl: './homesite.component.html',
  styleUrls: ['./homesite.component.css']
})
export class HomesiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('app_menu').style.display = 'none';
    document.getElementById('top_bar').style.display = 'none';

  }

}
