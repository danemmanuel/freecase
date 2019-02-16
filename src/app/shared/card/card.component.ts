import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  title;

  @Input()
  icon;

  @Input() public colapseInit = true;

  @Input() public isEdit = true;

  colapse: boolean;

  constructor() {}

  ngOnInit() {
    this.colapse = this.colapseInit;
    this.isEdit = false;
  }

  colapseForm() {
    if (this.isEdit === false) {
      this.colapse = !this.colapse;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.isEdit === true) {
      this.colapse = false;
    }
  }
}
