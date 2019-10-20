import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouBankAccountComponent } from './you-bank-account.component';

describe('YouBankAccountComponent', () => {
  let component: YouBankAccountComponent;
  let fixture: ComponentFixture<YouBankAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouBankAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouBankAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
