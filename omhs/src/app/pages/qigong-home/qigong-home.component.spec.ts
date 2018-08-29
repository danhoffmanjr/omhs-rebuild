import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QigongHomeComponent } from './qigong-home.component';

describe('QigongHomeComponent', () => {
  let component: QigongHomeComponent;
  let fixture: ComponentFixture<QigongHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QigongHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QigongHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
