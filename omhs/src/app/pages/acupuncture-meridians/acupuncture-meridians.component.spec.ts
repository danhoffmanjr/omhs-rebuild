import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunctureMeridiansComponent } from './acupuncture-meridians.component';

describe('AcupunctureMeridiansComponent', () => {
  let component: AcupunctureMeridiansComponent;
  let fixture: ComponentFixture<AcupunctureMeridiansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupunctureMeridiansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupunctureMeridiansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
