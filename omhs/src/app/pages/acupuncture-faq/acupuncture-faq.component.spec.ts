import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcupunctureFaqComponent } from './acupuncture-faq.component';

describe('AcupunctureFaqComponent', () => {
  let component: AcupunctureFaqComponent;
  let fixture: ComponentFixture<AcupunctureFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcupunctureFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcupunctureFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
