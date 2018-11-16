import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'school';

  ngOnInit() {
    const el = document.getElementById('overlay');
    el.classList.remove('hidenn');
  }
}
