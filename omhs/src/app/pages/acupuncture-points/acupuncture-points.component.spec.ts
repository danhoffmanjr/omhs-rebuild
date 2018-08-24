import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupuncturePointsComponent } from './acupuncture-points.component';

describe('AcupuncturePointsComponent', () => {
  let component: AcupuncturePointsComponent;
  let fixture: ComponentFixture<AcupuncturePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupuncturePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupuncturePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
