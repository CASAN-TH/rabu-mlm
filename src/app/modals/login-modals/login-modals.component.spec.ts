import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalsComponent } from './login-modals.component';

describe('LoginModalsComponent', () => {
  let component: LoginModalsComponent;
  let fixture: ComponentFixture<LoginModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
