import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunctureHistoryComponent } from './acupuncture-history.component';

describe('AcupunctureHistoryComponent', () => {
  let component: AcupunctureHistoryComponent;
  let fixture: ComponentFixture<AcupunctureHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupunctureHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupunctureHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
