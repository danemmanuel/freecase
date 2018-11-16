import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyandgetloginComponent } from './verifyandgetlogin.component';

describe('VerifyandgetloginComponent', () => {
  let component: VerifyandgetloginComponent;
  let fixture: ComponentFixture<VerifyandgetloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyandgetloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyandgetloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
