import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminRegisterAdminComponent } from './super-admin-register-admin.component';

describe('SuperAdminRegisterAdminComponent', () => {
  let component: SuperAdminRegisterAdminComponent;
  let fixture: ComponentFixture<SuperAdminRegisterAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminRegisterAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminRegisterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
