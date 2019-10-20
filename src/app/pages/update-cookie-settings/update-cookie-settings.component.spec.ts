import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCookieSettingsComponent } from './update-cookie-settings.component';

describe('UpdateCookieSettingsComponent', () => {
  let component: UpdateCookieSettingsComponent;
  let fixture: ComponentFixture<UpdateCookieSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCookieSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCookieSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
