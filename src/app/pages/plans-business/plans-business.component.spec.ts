import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansBusinessComponent } from './plans-business.component';

describe('PlansBusinessComponent', () => {
  let component: PlansBusinessComponent;
  let fixture: ComponentFixture<PlansBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
