import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QigongHistoryComponent } from './qigong-history.component';

describe('QigongHistoryComponent', () => {
  let component: QigongHistoryComponent;
  let fixture: ComponentFixture<QigongHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QigongHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QigongHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
