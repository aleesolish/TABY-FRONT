import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegisterProfileComponent } from './admin-register-profile.component';

describe('AdminRegisterProfileComponent', () => {
  let component: AdminRegisterProfileComponent;
  let fixture: ComponentFixture<AdminRegisterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegisterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegisterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
