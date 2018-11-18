import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTaskComponent } from './cadastrar-task.component';

describe('CadastrarTaskComponent', () => {
  let component: CadastrarTaskComponent;
  let fixture: ComponentFixture<CadastrarTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
