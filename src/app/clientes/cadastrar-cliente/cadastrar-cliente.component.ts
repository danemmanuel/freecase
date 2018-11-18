import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../_services/toast.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  uid: any;
  itemList: AngularFireList<any>;
  formCliente: FormGroup;

  constructor(
    public toastService: ToastService,
    private router: Router,
    private fire: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
    this.itemList = db.list('clientes');
    this.uid = localStorage.getItem('uid');
  }

  ngOnInit() {
    this.construirForm();
  }

  construirForm() {
    this.formCliente = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }
  insertCliente() {
    if (!this.formCliente.controls.email.invalid) {
      this.itemList.push({
        uid: this.uid,
        name: this.formCliente.value.nome,
        telefone: this.formCliente.value.telefone,
        email: this.formCliente.value.email
      });
      this.router.navigate(['/dashboard/clientes']);
    }
  }
}
