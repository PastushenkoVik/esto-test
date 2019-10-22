import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsLinkComponent } from './tabs-link.component';

describe('TabsLinkComponent', () => {
  let component: TabsLinkComponent;
  let fixture: ComponentFixture<TabsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
