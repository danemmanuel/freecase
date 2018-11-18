import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBrainblockComponent } from './cadastrar-brainblock.component';

describe('CadastrarBrainblockComponent', () => {
  let component: CadastrarBrainblockComponent;
  let fixture: ComponentFixture<CadastrarBrainblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarBrainblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarBrainblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
