import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminUpdateAdminComponent } from './super-admin-update-admin.component';

describe('SuperAdminUpdateAdminComponent', () => {
  let component: SuperAdminUpdateAdminComponent;
  let fixture: ComponentFixture<SuperAdminUpdateAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminUpdateAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminUpdateAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
