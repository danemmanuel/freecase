import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-details-cliente',
  templateUrl: './details-cliente.component.html',
  styleUrls: ['./details-cliente.component.css']
})
export class DetailsClienteComponent implements OnInit {
  id: any;
  itemList: AngularFireList<any>;
  itemArray = [];

  data = {
    name: '',
    telefone: ''
  };

  constructor(public db: AngularFireDatabase, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params;
    });

    this.itemList = db.list('clientes');

    this.itemList.snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        const y = action.payload.toJSON();
        y['$key'] = action.key;

        if (action.key === this.id['id']) {
          this.itemArray.push(y as ListItemClass);
          this.data.name = this.itemArray[0]['name'];
          this.data.telefone = this.itemArray[0]['telefone'];
        }
      });
    });
  }

  ngOnInit() {}
}

export class ListItemClass {
  $key: string;
  name: string;
  telefone: string;
}
