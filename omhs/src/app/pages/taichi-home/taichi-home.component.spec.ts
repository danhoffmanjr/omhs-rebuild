import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaichiHomeComponent } from './taichi-home.component';

describe('TaichiHomeComponent', () => {
  let component: TaichiHomeComponent;
  let fixture: ComponentFixture<TaichiHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaichiHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaichiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
