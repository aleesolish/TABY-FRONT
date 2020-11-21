import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YutuComponent } from './yutu.component';

describe('YutuComponent', () => {
  let component: YutuComponent;
  let fixture: ComponentFixture<YutuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YutuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YutuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
