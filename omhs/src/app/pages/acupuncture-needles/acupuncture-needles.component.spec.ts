import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunctureNeedlesComponent } from './acupuncture-needles.component';

describe('AcupunctureNeedlesComponent', () => {
  let component: AcupunctureNeedlesComponent;
  let fixture: ComponentFixture<AcupunctureNeedlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupunctureNeedlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupunctureNeedlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
