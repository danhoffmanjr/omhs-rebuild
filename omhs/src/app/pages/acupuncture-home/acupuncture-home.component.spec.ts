import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunctureHomeComponent } from './acupuncture-home.component';

describe('AcupunctureHomeComponent', () => {
  let component: AcupunctureHomeComponent;
  let fixture: ComponentFixture<AcupunctureHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupunctureHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupunctureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
