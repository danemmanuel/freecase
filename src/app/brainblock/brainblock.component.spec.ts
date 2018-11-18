import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrainblockComponent } from './brainblock.component';

describe('BrainblockComponent', () => {
  let component: BrainblockComponent;
  let fixture: ComponentFixture<BrainblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
