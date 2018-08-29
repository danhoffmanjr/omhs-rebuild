import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QigongClassesComponent } from './qigong-classes.component';

describe('QigongClassesComponent', () => {
  let component: QigongClassesComponent;
  let fixture: ComponentFixture<QigongClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QigongClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QigongClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
