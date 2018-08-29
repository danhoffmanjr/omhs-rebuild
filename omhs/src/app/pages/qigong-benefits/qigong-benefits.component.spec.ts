import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QigongBenefitsComponent } from './qigong-benefits.component';

describe('QigongBenefitsComponent', () => {
  let component: QigongBenefitsComponent;
  let fixture: ComponentFixture<QigongBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QigongBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QigongBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
